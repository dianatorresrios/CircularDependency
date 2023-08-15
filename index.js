const aModule = require('./a');
const bModule = require('./b');

console.log(aModule.aVariable);
console.log(aModule.aFunction());
console.log(bModule.bFunction());

//Esto permite que las exportaciones e importaciones funcionen correctamente,
aunque generalmente es una buena práctica evitar las dependencias circulares, 
 ya que pueden complicar el mantenimiento y la comprensión del código.//