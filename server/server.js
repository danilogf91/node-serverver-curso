require('./config/config'); // lee este archivo y encuentra el puerto donde corre la app

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyParser.json());

// Habilitar carpeta public 
app.use(express.static(path.resolve(__dirname, '../public'))); // path arma la direccion

// Configuracion global de rutas
app.use(require('./routes/index'));

// Conexion a la base de datos
mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, resp) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto ', process.env.PORT);
});