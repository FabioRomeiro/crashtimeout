var mysql  = require('mysql');
function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ALUNOS',
        database: 'bdcheck'
    });
}

module.exports = function() {
    return createDBConnection;
}
