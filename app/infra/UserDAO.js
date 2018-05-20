function UserDAO(connection) {
    this._connection = connection;
}

UserDAO.prototype.login = function (username, password, callback) {
    this._connection.query("select * from user where nick=? and pass=?", [username, password], callback);
}

module.exports = function() {
    return UserDAO;
};
