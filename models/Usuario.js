const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  ocupacion: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);