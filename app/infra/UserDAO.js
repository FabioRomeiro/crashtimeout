function UserDAO(connection) {
    this._connection = connection;
}

UserDAO.prototype.login = function (tipo, username, password, callback) {
    this._connection.query("select * from user where nick=? and pass=?", [tipo,username, password], callback);
}

module.exports = function() {
    return UserDAO;
};
