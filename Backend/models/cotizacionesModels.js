const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Favor de poner tu nombre"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Favor de poner tu email"],
        unique: true
    },
    texto: {
        type: String,
        required: [true, "Por favor agrega una descripción de tu situación para poder agendar una cita para la cotización"]
    },
},{
    timestamps : true
})
