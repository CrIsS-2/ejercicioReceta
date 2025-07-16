// PROGRAMA PRINCIPAL - une Modelo, Vista y Controlador
const Receta = require('./model/receta'); // Importamos el modelo
const vista = require('./view/recetaVista'); // Importamos la vista
const { crearControlador } = require('./controller/recetaControlador'); // Importamos el controlador

// Creamos una receta inicial
const receta = new Receta('Tortilla de papas', 'Huevos, papas y cebolla.');

// Creamos el controlador y le pasamos el modelo y la vista
const controlador = crearControlador(receta, vista);

// Mostramos la receta original
controlador.mostrar();

// Simulamos cambios: el usuario actualiza los datos
controlador.actualizarNombre('Tortilla española');
controlador.actualizarDescripcion('Huevos, papas, cebolla y sal.');

// Mostramos la receta actualizada
controlador.mostrar();
