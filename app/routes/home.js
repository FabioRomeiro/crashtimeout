module.exports = function(app) {
    var name, rm

    app.get('/', function(req, res) {

        if (logged[1] == 0) {
          var connection = app.infra.connectionFactory();
          var studentDAO = new app.infra.studentDAO(connection);
          studentDAO.getStudentInfo(logged[0], function(err, user) {
              console.log({User:user})
              name = user[0].name;
              rm = user[0].class;
              console.log(name, rm)
              res.render('home/index',{name:name, rm:rm});
          })
          studentDAO.getStudentEssay(logged[0], function(err, res) {
              console.log({Essays:res})
          })
        }
    });
}
