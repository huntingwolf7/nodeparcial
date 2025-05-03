const mongoose = require('mongoose')

const cotizacionSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor agregue su nombre"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Por favor agregue su email"],
        unique: true
    },
    texto: {
        type: String,
        required: [true, "Por favor agregue una descripción de su situación para poder agendar una cita para la cotización"]
    },
},{
    timestamps : true
})

module.exports = mongoose.model('Cotizacion', cotizacionSchema)