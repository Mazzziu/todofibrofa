'use strict'

const express = require('express');
const router = express.Router();
const articulos_controller = require ('../controllers/articulos.controller');

router.get('/testGet', articulos_controller.testGet);
router.post('/testPost', articulos_controller.testPost);

router.post('/',articulos_controller.carga);

module.exports = router;