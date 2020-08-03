const { createServer } = require('http');

const port = 3000;

function router(req,res) {
  switch (req.url) {
    case '/':
      res.end('<h1>Hola!</h1>');
      break;
    default:
      res.write('404 ! esa url no existe');
      res.end();
      break;
  }
}

const server = createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.info('Could not establish a connection to the server');
    console.error(err.message);
  }
  console.info(`> Ready on http://localhost:${port}`);
})




// const http = require('http');

// http.createServer(router).listen(3000);

// function router(req, res) {
//   console.log('nueva petición');
//   console.log(req.url);

//   switch (req.url) {
//     case '/hola':
//       res.write('Hola, que tal');
//       res.end();
//       break;
//     default:
//       res.write('Error 404: No se lo que quieres');
//       res.end();
//       break;
//   }

//   // res.writeHead(201, { 'Content-Type': 'text/plain' })

//   // // Escribir respuesta al usuario
//   // res.write('hola, ya se usar HTTP de NodeJS');

//   // res.end();
// }

// console.log("Escuchando http en el puerto 3000")
