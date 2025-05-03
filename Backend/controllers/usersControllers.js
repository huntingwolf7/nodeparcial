const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/usersModels')
const { urlencoded } = require('express')

const login = asyncHandler (async (req, res) => {
    const {email, password} = req.body
    
    const user = await User.findOne({email})

    if ( user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
         name: user.name,
         email: user.email,
            token: generarToken(user.id)

        })
    } else {
        res.status(400)
        throw new Error ("Credenciales incorrectas")
    }
})



const generarToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30m'
    })

}

module.exports = {
    login
}