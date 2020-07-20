const hola = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`)
      resolve(nombre);
    }, 1000);
  });
}

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...')
      // resolve(nombre);
      reject('Hay un error')
    }, 100);
  });
}

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios', nombre);
      resolve();
    }, 1000);
  })
}


console.log('Iniciando el proceso')
hola('Ari')
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso')
  })
  .catch((error) => {
    console.error('Ha habido un error:')
    console.error(error)
  })