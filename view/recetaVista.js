// VISTA - función que muestra la receta en consola
function mostrarReceta(nombre, descripcion) {
  console.log(`📋 Receta: ${nombre}`);           // Muestra el nombre
  console.log(`📝 Descripción: ${descripcion}`); // Muestra la descripción
  console.log('-------------------------------');
}

// Exportamos la función para usarla desde el controlador
module.exports = { mostrarReceta };
