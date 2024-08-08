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
    var sql = "INSERT INTO curriculum (idalumnos, posgrado, universidad, preparatoria, secundaria, trabajo1, trabajo2, trabajo3, trabajo1_fechaini, trabajo1_fechafin, trabajo2_fechaini, trabajo2_fechafin, trabajo3_fechaini, trabajo3_fechafin,referencia1,referencia2)";
    sql+="VALUES (1,'MAESTRIA EN SISTEMAS DE INFORMACION UNIVERSIDAD ICEL','LICENCIATURA EN INGENIERIA EN SISTEMAS COMPUTACIONALES','INSTITUTO PRETIUM','INSTITUTO PRETIUM','BUSINESSWARE SA DE CV','CRESWIN SA DE CV','CRESCLOUD SA DE CV',";
    sql+="'1993-01-01','1995-12-31','2011-07-01','2016-06-30','2020-10-01','2021-11-30','RUTH GARCIA','AARON FLORES')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
    connection.end();
});
