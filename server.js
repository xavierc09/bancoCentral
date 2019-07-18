const express = require('express');
const bodyParser = require('body-parser');
//Instanciamos express somo servidor
const app = express();
//Uso del Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);

//Funciones que responden a los metodos GET POST PUT DELETE
app.get('/', function (req, res){
    res.send('Hello Word');
});

//Inciamos el servidor escuchando el puerto 3500
app.listen(3000, function (){
    console.log('El servidor esta corriento por el puerto 3000');
});
