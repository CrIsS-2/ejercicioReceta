// CONTROLADOR - puente entre modelo y vista
function crearControlador(receta, vista) {
  return {
    // Cambia el nombre de la receta en el modelo
    actualizarNombre(nombre) {
      receta.setNombre(nombre);
    },

    // Cambia la descripción de la receta en el modelo
    actualizarDescripcion(desc) {
      receta.setDescripcion(desc);
    },

    // Actualiza la vista mostrando los datos del modelo
    mostrar() {
      vista.mostrarReceta(receta.getNombre(), receta.getDescripcion());
    }
  };
}

// Exportamos el controlador para usarlo en el programa principal
module.exports = { crearControlador };