function studentDAO(connection) {
    this._connection = connection;
}

studentDAO.prototype.getStudentInfo = function (id, callback) {
    this._connection.query("select * from student where id=?", [id], callback);
}

studentDAO.prototype.getStudentEssay = function(id, callback) {
    this._connection.query("select * from essay where student_id=?", [id], callback);
}

module.exports = function() {
    return studentDAO;
};
