const { Pool } = require('pg');
require('dotenv').config();

async function testDB() {
  try {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }  
    });

    const result = await pool.query('SELECT NOW() AS ahora');
    console.log('✅ Conexión exitosa. Fecha actual del servidor:', result.rows[0].ahora);
    process.exit();
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    process.exit(1);
  }
}

testDB();
