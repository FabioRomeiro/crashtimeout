function UserDAO(connection) {
    this._connection = connection;
}

UserDAO.prototype.login = function (tipo, username, password, callback) {
    this._connection.query("select * from ? where nickname=? and password=?", [tipo,username, password], callback);
}

module.exports = function() {
    return UserDAO;
};
