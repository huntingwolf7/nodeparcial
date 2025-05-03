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


const getUsers = asyncHandler( async(req, res) => {
    const users = await User.find()
    res.status(200).json({users})
})

const createUsers = asyncHandler( async(req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error("Favor de insertar un texto")
    }

    const user = await User.create({
        texto: req.body.texto
    })
    res.status(201).json({user})
})

const updateUsers = asyncHandler( async(req, res) => {

    const user = await User.findById(req.params.id)
    if(!tarea) {
        res.status(404)
        throw new Error('Usuario no encontrado')
    }
    
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
    });

    res.status(200).json(userUpdated);
})

const deleteUsers = asyncHandler( async(req, res) => {
    const user = await User.findById(req.params.id)
    if(!user) {
        res.status(404)
        throw new Error('Usuario no encontrado')
    }

    await user.deleteOne()


    res.status(200).json({"id": req.params.id})
})

module.exports = {
    login,
    getUsers,
    createUsers, 
    updateUsers, 
    deleteUsers
};