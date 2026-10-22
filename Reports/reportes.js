// Módulo de Generación de Reportes
function generarReporte(tipo, datos) {
  console.log(`Generando reporte de tipo: ${tipo}`);
  return `Reporte ${tipo} generado con éxito`;
}

module.exports = { generarReporte };