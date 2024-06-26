
class ConectarBD {
    constructor() {
        this.conexion = null;
        this.mysql = require("mysql2/promise");
    }

    async conectarMySql() {
        try {
            console.log('Intentando conectar a MySQL con los siguientes datos:');
            console.log({
                host: "localhost",
                user: "root",
                password: "root",
                database: "universidad",
                port: 3306
            });

            console.log("Conectado a MySql");
            return this.conexion;
        } catch (error) {
            console.error("Error al conectar con MySql: " + error);
        }
    }

    async cerrarConexion() {
        try {
            if (this.conexion) {
                await this.conexion.end();
                console.log("Conexion de Mysql cerrada");
            }
        } catch (error) {
            console.error("Error al desconectar de Mysql: " + error);
        }
    }
}

module.exports = ConectarBD;
