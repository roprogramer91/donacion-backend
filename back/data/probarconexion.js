const mysql = require('mysql2/promise');
require('dotenv').config();

async function testDB() {
  try {
    const pool = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    const [rows] = await pool.query('SELECT NOW() AS ahora');
    console.log('✅ Conexión exitosa. Fecha actual del servidor:', rows[0].ahora);
    process.exit();
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
}

testDB();
