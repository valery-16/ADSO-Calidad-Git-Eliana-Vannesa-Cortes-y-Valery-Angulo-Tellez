/**
 * Registra un nuevo usuario en la plataforma.
 * @param {string} nombre 
 * @param {string} correo 
 * @param {string} contrasena 
 */
function registrarUsuario(nombre, correo, contrasena) {
  if (!correo.includes("@")) {
    throw new Error("El correo electrónico no es válido");
  }
  console.log(`Registrando usuario: ${nombre}`);
  return { id: 1, nombre, correo };
}

module.exports = { registrarUsuario };