function RedacaoDAO(connection) {
    this._connection = connection;
}

RedacaoDAO.prototype.lista = function(callback) {
    this._connection.query('select * from redacoes', callback);
}

RedacaoDAO.prototype.salva = function(redacao, callback) {
    this._connection.query('insert into redacoes set ?', redacao, callback);
}

module.exports = function () {
    return RedacaoDAO;
};
