console.log('Algo')
console.info('Algo')
console.error('Algo')
console.warn('Algo')

var tabla = [
  {
    a: 1,
    b: 'Z'
  },
  {
    a: 2,
    b: 'Otra'
  }
]

console.table(tabla)

console.log('Conversacion');
console.group('conver');
console.log('Hola');
console.group('bla')
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('bla')
console.log('Adios');
console.groupEnd('conver');

console.log('Otra cosas de otra funcion')

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')