const mysql = require('mysql');
//Creamos clase encargada de conectar a la base de datos MYSQL o MARIADB
class DB {
    constructor(){
        //Verificamos la existencia de alguna instancia en la base de datos
        if(!DB.instancia){
            DB.instancia = this;
            //Agregamos los parametros de conexion
            this.connection = mysql.createConnection({
                host     : 'node49749-env-9383255.atl.jelastic.vps-host.net',
                user     : 'root',
                password : 'TFYsaa10408',
                database : 'node_mysql'
            });
            //conectamos y manejamos la conexion con throw
            this.connection.connect((err) => {
                if (err) throw err;    
                //console.log('Fallo la cone!');
            });
            //console.log('Entro a conectar!!');
        }
        //si existe la instancia que retorne la misma
        //console.log('Encontro una instancia de cone');
        return DB.instancia;
    }
}
//creamos una instancia de la clase
const instancia = new DB();
//Por seguridad  por medio del freeze congelamos los parametros de cada instancia para evitar la inyeccion sql
Object.freeze(instancia);
//Hacemos visible el modulo
module.exports = instancia;