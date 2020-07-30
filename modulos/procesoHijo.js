const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//   if(err) {
//     console.error(err);
//     return false
//   }

//   console.log(stdout)
// })

//Si le quiero pasar parametros debo pararselo como un array, ejmplo en linux para lo mismo:
// let proceso = spawn('ls', ['-la])
let proceso = spawn('cmd.exe', ['/c','dir']);

console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', (dato) => {
  console.log('¿Esta Muerto?')
  console.log(proceso.killed)
  console.log(dato.toString())
})

proceso.on('exit', () => {
  console.log('El proceso terminó')
  console.log(proceso.killed)
})