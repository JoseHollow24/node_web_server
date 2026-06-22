# proyecto-web-server

Servidor web estático construido con **Node.js** y **Express**, desarrollado como práctica de curso. Sirve archivos estáticos desde una carpeta pública y es configurable mediante variables de entorno.

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto tomando como base el archivo `.env.template`:

```
PORT=your-port(only numbers)
PUBLIC_PATH=public
```

## Instalación y uso

```bash
npm install
npm run dev
```
