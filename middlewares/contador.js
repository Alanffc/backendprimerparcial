let totalOperaciones = 0;

const contarOperaciones = (req, res, next) => {
  totalOperaciones++;
  next();
};

const obtenerContador = () => totalOperaciones;

module.exports = {
  contarOperaciones,
  obtenerContador,
};