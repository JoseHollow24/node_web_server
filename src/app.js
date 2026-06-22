import { envs } from './config/env.js';
import { startServer } from './server/server.js';

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  })
}

// Function agnostita autoconvocada
// no tiene nombre
// autocovocada porque la ejecutamos con los parentesis
(async () => {
  main()
})()

