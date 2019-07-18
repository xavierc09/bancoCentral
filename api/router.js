module.exports = (app) => {
// Funciones que responden a los metodos GET PUT POST DELETE
app.get('/', function(req, res) {
//    res.send('Servidor Iniciado')
let persona = {
    'nombre': 'Javier',
    'Apellido': 'Calvo'
};
res.send(persona);
});
app.post('/personas', (req, res)=> {
    let nombre = req.body.nombre;
    let edad = req.body.edad;
    let miPersona = {
        'elNombre' : nombre,
        'laEdad': edad     
    }
    res.send(miPersona);
});
}