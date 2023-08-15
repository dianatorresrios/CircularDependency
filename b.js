const aModule = require('./a');

console.log("Ejecutando b.js");

function bFunction() {
  return "Función bFunction en b.js";
}

module.exports = {
  bFunction
};
