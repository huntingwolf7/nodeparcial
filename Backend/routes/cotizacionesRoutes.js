const express = require ('express')
const router = express.Router()
const {getCotizaciones, createCotizaciones, updateCotizaciones, deleteCotizaciones} = require ("../controllers/cotizacionesControllers.js")

module.exports = router