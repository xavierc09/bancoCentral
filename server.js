const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./api/router.js')(app);

app.listen(3500, function(){
    console.log('servidor corriendo en el puerto 3.500')
});
