'use strict';

const dameMiNumero = require('./mis-modulos/numero');
const dameMiArray = require('./mis-modulos/mi-array');
const miObjeto = require('./mis-modulos/mi-objeto');

const todosLosDatos = require('./mis-modulos'); // require('./mis-modulos/index');

console.log('dameMiNumero:', dameMiNumero);
console.log(`dameMiArray: ${dameMiArray}, ${dameMiArray.join(',')}`);

const { nombre, edad } = miObjeto;
console.log(`${miObjeto.nombre}, ${miObjeto.edad}, ${nombre}, ${edad}`);



console.log('todos datos numero', todosLosDatos.numero);
console.log('todos datos mi objeto nombre', todosLosDatos.objeto.nombre);
