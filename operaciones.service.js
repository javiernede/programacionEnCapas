import ContenedorMemoria from '../containers/Contenedor.memoria.js'
import ContenedorArchivo from '../containers/Contenedor.archivo.js';
import { suma, resta, multiplicacion, division } from 'calc32085'; 
import { config } from '../utils/config.js';

let container = null;

console.log(config);

if (config.server.PERS === 'MEMORIA') {
    container = new ContenedorMemoria();
} else if (config.server.PERS === 'ARCHIVO') {
    container = new ContenedorArchivo('operaciones.json');
}

export async function obtenerOperaciones() {
    try {
        return await container.listarAll();
    } catch (error) {
        throw new Error(`Error al obtener Operaciones`);
    }
}

export async function obtenerOperacion(id) {
    try {
        let data =  await container.listar(id);
        console.log('service ',data)
        return data;
    } catch (error) {
        console.log(error);
        throw new Error(`Error al obtener Operacion by id: ${id}`);
    }
}

export async function guardarOperacion(operacion, params) {
    try {
        let resultado = 0; 

        switch (operacion) {
            case 'suma':
                resultado = suma(params[0], params[1]);
                break;
            case 'resta':
                resultado = resta(params[0], params[1]);
                break;
            case 'multiplicacion':
                resultado = multiplicacion(params[0], params[1]);
                break;
            case 'division':
                resultado = division(params[0], params[1]);
                break;
        }

        const item = {
            tiempo: new Date(),
            tipo: operacion,
            params: params,
            resultado: resultado
        }

        return await container.guardar(item);
    } catch (error) {
        console.log(error);
        throw new Error(`Error al guardar Operacion ${item}`);
    }
}