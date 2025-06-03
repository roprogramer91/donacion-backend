const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS ahora');
    res.json({ status: 'Conexión exitosa', ahora: result.rows[0].ahora });
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
    res.status(500).json({ error: 'No se pudo conectar a la base de datos' });
  }
});

module.exports = router;
