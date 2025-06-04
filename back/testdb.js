const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: 'postgresql://postgres:tu-contraseña@db.svndinsgxsxazpyqrsps.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false }
});

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexión exitosa:', result.rows[0]);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al conectar:', error.message);
    process.exit(1);
  }
})();
