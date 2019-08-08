'use strict'

console.log("*** app iniciada ***");

const mongoose = require('mongoose');
const app = require ('./app');
const port = 2500;
const ip = 'localhost';

//mongoose.set({ useNewUrlParser: true });

mongoose.connect('mongodb://localhost:2300')
        .then(function(){
            console.log('*** base de datos conectada a la ruta localhost:2300 ***');
            app.listen(port, function(){
                console.log(`*** servidor corriendo en ${ip}:${port} ***`);
            })
        })
        .catch(function(err){
            console.log(err);
        });