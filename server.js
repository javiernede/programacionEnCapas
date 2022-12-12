/* ---------------------- Modulos ----------------------*/
import express from 'express';
import { config } from './src/utils/config.js';
import routerOperaciones from './src/routers/operaciones.routes.js';

/* ---------------------- Instancia de express ----------------------*/
const app = express();

/* ---------------------- Middlewares ---------------------- */
app.use(express.json());

/* ---------------------- Rutas ----------------------*/
app.use('/api/v1/operaciones', routerOperaciones);

/*Agregamos routers a la app*/
app.all('*', (req, res)=>{
    res.status(404).json({
        status: 404,
        route: `${req.method} ${req.url}`,
        msg: `No implemented route`
    })
});

/* ---------------------- Servidor ----------------------*/
const PORT = config.server.PORT || 3000;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor [${config.server.NODE_ENV}] escuchando en puerto ${PORT}`);
});
server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});