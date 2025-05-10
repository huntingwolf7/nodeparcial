const express = require ('express')
const router = express.Router()
const {getCotizaciones, createCotizaciones, updateCotizaciones, deleteCotizaciones} = require ("../controllers/cotizacionesControllers.js")

router.get('/', getCotizaciones)
router.post('/', createCotizaciones)
router.put('/:id', updateCotizaciones)
router.delete('/:id', deleteCotizaciones)

console.log("Rutas de cotizaciones cargadas");

module.exports = router