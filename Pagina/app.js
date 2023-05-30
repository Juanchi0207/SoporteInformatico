const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});

app.get("/insertar", (req, res) => {

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'alumno',
  password : 'alumnoipm',
  database : 'prueba'/*base de datos literalmente*/ 
  /*crear la base de datos en sql*/ 
});
  connection.connect();
 var consulta= 'insert into prueba values(/*nombre, apellido, usuario, ciudad, codigo postal*/); '
connection.query(consulta, function (error, results, fields) {
  if (error) throw error;
  else console.log("Todo bien");
 
connection.end();
});
});
