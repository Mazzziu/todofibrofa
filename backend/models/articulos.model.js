'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

var articuloSchema = {
    id:String,
    nombre:String,
    categoria:String,
    precio:Number,
    ancho:Number,
    alto:Number,
    largo:Number
}

module.exports = mongoose.model('producto',articuloSchema);