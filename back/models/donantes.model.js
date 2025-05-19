const db = require('../data/config');

// Obtener todos los donantes
const obtenerTodos = async () => {
  const [rows] = await db.query('SELECT * FROM donantes ORDER BY fecha_Registro DESC');
  return rows;
};

// Guardar un nuevo donante
const guardar = async (nuevo) => {
  const fecha = new Date().toISOString().slice(0, 19).replace('T', ' '); 

  const [result] = await db.query(
    `INSERT INTO donantes (nombre, apellido, dni, edad, peso, grupo_sanguineo, enfermedades, fechaRegistro)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      nuevo.nombre,
      nuevo.apellido,
      nuevo.dni,
      nuevo.edad,
      nuevo.peso,
      nuevo.grupo_Sanguineo,
      nuevo.enfermedades || '',
      fecha
    ]
  );

  return result;
};

module.exports = {
  obtenerTodos,
  guardar
};
