const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const app = express()
const {errorHandler} = require("./middleware/errorMiddleware")

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/cotizaciones', require('./routes/cotizacionesRoutes'))


app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))
