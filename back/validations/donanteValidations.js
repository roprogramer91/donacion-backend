const gruposValidos = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

function validarDNI(dni) {
  return /^\d{7,9}$/.test(dni);
}

function validarEdad(edad) {
  return typeof edad === 'number' && edad >= 18 && edad <= 65;
}

function validarGrupo(grupo) {
  return gruposValidos.includes(grupo);
}

module.exports = {
  validarDNI,
  validarEdad,
  validarGrupo
};
