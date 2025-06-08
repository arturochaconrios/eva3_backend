require ('dotenv').config();
const mysql = require('mysql2/promise');

// vericar que las variables de entorno esten definidas

const requiredEnvVars = [
  'DB_HOST',
  'DB_USER',
  'DB_NAME',
  'DB_PORT',]   

  requiredEnvVars.forEach((envVar) => {
    if (!process.env[envVar]) {
       throw new Error('Falta variable de entorno:  ${envVar}');
    }
});

// crear un pool de conexiones a la base de datos

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'eva3_backend',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;