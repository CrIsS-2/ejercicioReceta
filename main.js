const Receta = require('./model/receta');
const vista = require('./view/recetaVista');
const { crearControlador } = require('./controller/recetaControlador');

const receta = new Receta('Tortilla de papas', 'Huevos, papas y cebolla.');
const controlador = crearControlador(receta, vista);

controlador.mostrar();

controlador.actualizarNombre('Tortilla española');
controlador.actualizarDescripcion('Huevos, papas, cebolla y sal.');

controlador.mostrar();