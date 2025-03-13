const express = require('express');
const router = express.Router();
const { contarOperaciones } = require('../middlewares/contador');
const {
  crearUsuario,
  obtenerUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} = require('../controllers/usuariosController');

router.post('/', contarOperaciones, crearUsuario);
router.get('/', contarOperaciones, obtenerUsuarios);
router.put('/:id', contarOperaciones, actualizarUsuario);
router.delete('/:id', contarOperaciones, eliminarUsuario);

module.exports = router;