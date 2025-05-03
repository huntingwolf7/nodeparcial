const express = require ('express')
const router = express.Router()
const {getCotizaciones, createCotizaciones, updateCotizaciones, deleteCotizaciones} = require ("../controllers/cotizacionesControllers.js")

//Obtenemos las tareas
router.get('/', getCotizaciones)
//Creamos una tarea
router.post('/', createCotizaciones)
//Modificamos una tarea
router.put('/:id', updateCotizaciones)
//Borramos una tarea
router.delete('/:id', deleteCotizaciones)

console.log("Rutas de cotizaciones cargadas");

module.exports = router