var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'testmysqlnodjs',
  password : 't3stm1sqln0djs',
  database : 'ims202402'
});
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
    var sql = "INSERT INTO alumnos (nombres, apellidos, celular, email) VALUES ('cruz angel salvador','lagunez perez','5568964642','angel.lagunez@outlook.com')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    connection.end();
});
