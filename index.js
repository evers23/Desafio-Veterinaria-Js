// Importamos las funciones registrar y leer desde el archivo operaciones.js
const { registrar, leer } = require('./operaciones');

// Tomamos los argumentos de la línea de comandos a partir del índice 2
// Los primeros dos elementos de process.argv son la ruta del ejecutable de Node.js y el archivo JS ejecutado
const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

// Evaluamos la operación especificada en la línea de comandos
if (operacion === 'registrar') {
    // Si la operación es 'registrar', llamamos a la función registrar con los argumentos correspondientes
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    // Si la operación es 'leer', llamamos a la función leer para mostrar todas las citas registradas
    leer();
} else {
    // Si la operación no es reconocida, mostramos un mensaje de error
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}

