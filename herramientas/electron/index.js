const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

const crearVentana = () => {
  ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
  })

  ventanaPrincipal.loadFile('index.html');
}
app.on('ready', crearVentana)
