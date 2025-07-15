function crearControlador(receta, vista) {
  return {
    actualizarNombre(nombre) {
      receta.setNombre(nombre);
    },

    actualizarDescripcion(desc) {
      receta.setDescripcion(desc);
    },

    mostrar() {
      vista.mostrarReceta(receta.getNombre(), receta.getDescripcion());
    }
  };
}

module.exports = { crearControlador };