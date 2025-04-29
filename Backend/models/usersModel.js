const mogoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Favor de poner tu nombre"]
    },
    email: {
        type: String,
        required: [true, "Favor de poner tu email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Favor de poner tu password"]
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)
