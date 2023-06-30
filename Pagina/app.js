const express = require('express')
const app = express()
const port = 3000
const path=require("path");
app.use(express.static(path.join(__dirname, 'Carrusel')));
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));




app.get('/carrusel', (req, res) => {
  res.sendFile(__dirname + '/carrusel.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})


app.post('/insertar', (req, res) => {
  console.log(req.body);
  var mysql = require('mysql');
  console.log("dasdasd");
  var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'paginaNode',
    user : 'alumno',
    password : 'alumnoipm',
});
console.log("dasdasd");
  conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
  });
  
  const{validationCustom01,validationCustom02}= req.body;
  console.log("dasdasd");
  const sql = `insert into usuario values(null,"${validationCustom01}","${validationCustom02}");`;

  conexion.query(sql, function (err, result) {
    if (err) {
      console.error('Error al guardar los datos: ', err);
      res.status(500).json({ error: 'Error al guardar los datos' });
      return;
    }
    res.status(200).json({ message: 'Datos guardados en la base de datos' });

})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

