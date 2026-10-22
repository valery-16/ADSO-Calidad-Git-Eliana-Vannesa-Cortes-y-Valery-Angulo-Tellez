/**
 * Genera reportes del sistema basados en los datos proporcionados.
 * @param {string} tipo - Tipo de reporte (ej. "PDF", "EXCEL")
 * @param {Array} datos - Lista de información a procesar
 */
function generarReporte(tipo, datos) {
  if (!datos || datos.length === 0) {
    return "Error: No hay datos suficientes para generar el reporte";
  }
  console.log(`Generando reporte de tipo: ${tipo}`);
  return `Reporte ${tipo} con ${datos.length} registros generado con éxito`;
}

module.exports = { generarReporte };