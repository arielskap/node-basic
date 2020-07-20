const fs = require('fs');

const leer = (ruta ,cb) => {
  fs.readFile(ruta, (err, data) => {
    console.log(data.toString());
  })
}

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (err) => {
    if(err) {
      console.error('No he podido escribirlo', err);
    } else {
      console.log('Se ha escrito correctamente');
    }
  })
}

const borrar = (ruta, cb) => {
  fs.unlink(ruta, cb)
}

// Si no existe crea el archivo
// escribir(__dirname + '/archivo2.txt', 'Soy un archivo nuevo', console.log)
// leer(__dirname + '/archivo.txt', console.log())

// Da error si no termino
borrar(__dirname + '/archivo2.txt', console.log);