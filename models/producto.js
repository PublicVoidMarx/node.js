const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productoSchema = new Schema({
    nombre:String,
    precio:String
})

const Producto = mongoose.model('Producto', productoSchema)

module.exports = Producto