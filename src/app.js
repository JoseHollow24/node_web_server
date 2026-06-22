
const { envs } = require('./config/env')
const { startServer } = require('./server/server')

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

