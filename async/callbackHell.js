const hola = (nombre, miCallback) => {
  setTimeout(() => {
    console.log(`Hola, ${nombre}`)
    miCallback(nombre);
  }, 1000);
}

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log('Adios', nombre);
    otroCallback();
  }, 1000);
}

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log('Bla bla bla bla...')
    callbackHablar();
  }, 100);
}

const conversacion = (nombre, veces, callback) => {
  if (veces >= 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    })
  } else {
    adios(nombre, callback);
  }
}
console.log('Iniciando proceso...');

hola('Ari', (nombre) => {
  conversacion(nombre, 3, () => {
    console.log('Proceso Terminado')
  })
})
// hola('Ari', (nombre) => {

//   hablar(() => {
//     adios(nombre, () => {
//       console.log('Terminando proceso...')
//     })
//   })

// })
