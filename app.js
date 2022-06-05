const calculadora = require('./modules/calculadora');
const {argv} = require('process');
const { sumar } = require('./modules/calculadora');

const operacion = argv[2];
const n1 = argv[3];
const n2 = argv[4];
let resultado = 0;

switch (operacion) {
    case "sumar":
        resultado = sumar(n1,n2)
        
        break;

    default:
        break;
}

console.log(operacion);