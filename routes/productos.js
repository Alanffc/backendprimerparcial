const express = require('express');
const router = express.Router();
const { contarOperaciones } = require('../middlewares/contador');
const {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto,
} = require('../controllers/productosController');

router.post('/', contarOperaciones, crearProducto);
router.get('/', contarOperaciones, obtenerProductos);
router.put('/:id', contarOperaciones, actualizarProducto);
router.delete('/:id', contarOperaciones, eliminarProducto);

module.exports = router;