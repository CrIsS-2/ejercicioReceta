// MODELO - clase Receta: representa los datos de una receta
class Receta {
  constructor(nombre, descripcion) {
    this.nombre = nombre;           // Nombre de la receta
    this.descripcion = descripcion; // Descripción o ingredientes
  }

  // Setter: actualiza el nombre
  setNombre(nombre) {
    this.nombre = nombre;
  }

  // Setter: actualiza la descripción
  setDescripcion(descripcion) {
    this.descripcion = descripcion;
  }

  // Getter: obtiene el nombre
  getNombre() {
    return this.nombre;
  }

  // Getter: obtiene la descripción
  getDescripcion() {
    return this.descripcion;
  }
}

// Exportamos la clase para usarla en otros archivos
module.exports = Receta;
