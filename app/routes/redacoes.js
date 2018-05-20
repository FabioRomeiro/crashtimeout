module.exports = function(app) {
    app.get('/redacoes/viewPredo', function(req, res) {
        if (logged[1] == 0) {

            userid = logged[0]
            var connection = app.infra.connectionFactory();

            var connection = app.infra.connectionFactory();
            var studentDAO = new app.infra.studentDAO(connection);

            studentDAO.getStudentInfo(logged[0], function (err, user) {
                console.log({ User: user })
                name = user[0].name;
                rm = user[0].class;
                res.render('redacao/viewPredo', { name: name, rm: rm, user: userid });
            })
        }
        console.log({logged:logged});
    });

    app.post('/redacoes', function(req, res) {
        var redacao = req.body;

        req.assert('tema', 'Tema é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros) {
            res.format({
                html: function() {
                    res.status(400).render('redacao/form', { errosValidacao: erros, redacao: redacao});
                },
                json: function() {
                    res.status(400).json(erros);
                }
            });

            return;
        }
    });
}
