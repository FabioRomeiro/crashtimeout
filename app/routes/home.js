module.exports = function(app) {
    var userid

    app.get('/', function(req, res) {

        if (logged[1] == 0) {

          userid = logged[0]
          var connection = app.infra.connectionFactory();

          var connection = app.infra.connectionFactory();
          var studentDAO = new app.infra.studentDAO(connection);

          studentDAO.getStudentInfo(logged[0], function(err, user) {
              console.log({User:user})
              name = user[0].name;
              rm = user[0].class;
              res.render('home/index',{name:name, rm:rm, user:userid});
          })
        }
    });
}
