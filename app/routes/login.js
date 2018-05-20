module.exports = function (app) {
    app.get('/login', function (req, res) {
        logged = null;
        console.log({logged:logged});
        res.render('login/login', { errosValidacao: {}, dados: {} });
    })
    app.post('/login', function (req, response) {

        var dados = req.body;
        console.log({dados:dados});


        req.assert('nick', 'Username é obrigatório').notEmpty();
        req.assert('pass', 'Senha é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if (erros) {
            response.format({
                html: function () {
                    response.status(400).render('login/login', { errosValidacao: erros, dados: dados });
                },
                json: function () {
                    response.status(400).json(erros);
                }
            });

            return;
        }

        var connection = app.infra.connectionFactory();
        var userDAO = new app.infra.UserDAO(connection);

        userDAO.login(dados.nick, dados.pass, function (err, res) {
            if (res.length) {
                console.log({res:res});
                logged = [res[0].id, res[0].type];
                response.redirect('/')
            } else {
                response.redirect('/login');
            }
        });
    });
}
