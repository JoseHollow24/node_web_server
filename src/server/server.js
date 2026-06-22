import express from 'express';
import path from 'path';

export const startServer = (options) => {
  const {port, public_path = 'public'} = options;

  const app = express()

  // para ocupar middlewares se necesita el metodo 'use'
  app.use(express.static(public_path)) //tura de contenido estaticvo qeu disponemos para el uso del servidor

  app.get('/', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
    res.sendFile(indexPath);
  })

  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`)
  }) 
}