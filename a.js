const bModule = require('./b');

const aVariable = "Hola desde a.js";

function aFunction() {
  return "Función aFunction en a.js";
}

console.log("Ejecutando a.js");

module.exports = {
  aVariable,
  aFunction
};
