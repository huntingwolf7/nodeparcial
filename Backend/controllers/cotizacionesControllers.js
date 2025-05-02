const asyncHandler = require('express-async-handler')
const Cotizacion = require('../models/cotizacionesModels')

const getCotizaciones = asyncHandler( async(req, res) => {
    const cotizaciones = await Cotizacion.find()
    res.status(200).json({cotizaciones})
})

const createCotizaciones = asyncHandler( async(req, res) => {
    if(!req.body.texto){
            res.status(400)
            throw new Error("Favor de insertar la descripción")
        }
    
        const cotizacion = await Cotizacion.create({
            texto: req.body.texto
        })
        res.status(201).json({cotizacion})
    })
    
    const updateCotizaciones = asyncHandler( async(req, res) => {
    
        const cotizacion = await Cotizacion.findById(req.params.id)
        if(!cotizacion) {
            res.status(404)
            throw new Error('No se encontró la cotización')
        }
        
        const cotizacionUpdated = await Tarea.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        });
    
        res.status(200).json(cotizacionUpdated);
    })
    
    const deleteCotizaciones = asyncHandler( async(req, res) => {
        const cotizacion = await Cotizacion.findById(req.params.id)
        if(!cotizacion) {
            res.status(404)
            throw new Error('No se encontró la cotización')
        }
    
        await cotizacion.deleteOne()
    
    
        res.status(200).json({"id": req.params.id})
    })
    
    module.exports = {
        getCotizaciones,
        createCotizaciones, 
        updateCotizaciones, 
        deleteCotizaciones
    }