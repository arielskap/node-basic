const hola = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola, ${nombre}`)
      resolve(nombre);
    }, 1000);
  });
}

const hablar = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...')
      resolve(nombre);
      // reject('Hay un error')
    }, 100);
  });
}

const adios = async (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios', nombre);
      resolve();
    }, 1000);
  })
}

const main = async () => {
  let nombre = await hola('ari');
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
  console.log('Termina el proceso');
}

console.log('Empezamos el proceso');
main()