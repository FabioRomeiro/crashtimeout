module.exports = function(app) {
    app.get('/redacoes/form', function(req, res) {
        res.render('redacao/form');
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

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results) {
            res.redirect('/produtos');
        });

        connection.end();
    });
}
