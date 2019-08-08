'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var articuloSchema = {
    codigo:String,
    nombre:String,
    categoria:String,
    precio:Number,
    ancho:Number,
    alto:Number,
    largo:Number,
    stock:Number
}

module.exports = mongoose.model('producto',articuloSchema);