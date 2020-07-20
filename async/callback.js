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

console.log('Iniciando proceso...');
hola('Ari', (nombre) => {
  adios(nombre, () => {
    console.log('Terminando proceso...')
  })
})
