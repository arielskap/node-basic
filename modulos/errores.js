const otraFuncion = () => {
  seRompe();
}

const seRompe = () => {
  return 3 + z
}

const seRompeAsincrona = (cb) => {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.error('Error en mi funcion asincrona')
      cb(error);
    }
  });
}

try {
  seRompeAsincrona((err) => {
    console.log(err.message)
  });
} catch (error) {
  console.error('Vaya, algo se ha roto...')
  console.error(error.message)
  console.log('Pero no pasa nada, lo hemos capturado')
}

console.log('esto de aqui esta al final');