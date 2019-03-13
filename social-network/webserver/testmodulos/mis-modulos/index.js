'use strict';

const miArray = require('./mi-array');
const miNumero = require('./numero');
const miObjeto = require('./mi-objeto');

const todosDatos = {
  matriz: miArray,
  numero: miNumero,
  objeto: miObjeto,
};

module.exports = todosDatos;

// equivale a:
/**
module.exports = {
  matriz: miArray,
  numero: miNumero,
  objeto: miObjeto,
};
 */
