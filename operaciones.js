// Importamos el módulo fs para interactuar con el sistema de archivos
const fs = require('fs');

// Función para registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
    // Creamos un objeto con los detalles de la nueva cita
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };
    
    // Leemos el archivo citas.json para obtener las citas existentes
    fs.readFile('./citas.json', 'utf8', (err, data) => {
        if (err) throw err; // Si ocurre un error al leer el archivo, lanzamos una excepción
        
        // Parseamos el contenido del archivo JSON a un arreglo de citas
        const citas = JSON.parse(data);
        
        // Agregamos la nueva cita al arreglo de citas
        citas.push(nuevaCita);
        
        // Escribimos el arreglo actualizado de citas de vuelta al archivo citas.json
        fs.writeFile('./citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) throw err; // Si ocurre un error al escribir el archivo, lanzamos una excepción
            console.log('Cita registrada con éxito'); // Confirmación de registro exitoso
        });
    });
}

// Función para leer todas las citas
function leer() {
    // Leemos el archivo citas.json para obtener las citas registradas
    fs.readFile('./citas.json', 'utf8', (err, data) => {
        if (err) throw err; // Si ocurre un error al leer el archivo, lanzamos una excepción
        
        // Parseamos el contenido del archivo JSON a un arreglo de citas
        const citas = JSON.parse(data);
        
        // Mostramos el arreglo de citas en la consola
        console.log(citas);
    });
}

// Exportamos las funciones registrar y leer para que puedan ser utilizadas en otros archivos
module.exports = { registrar, leer };

