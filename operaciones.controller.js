import { obtenerOperaciones, obtenerOperacion, guardarOperacion } from "../services/operaciones.service.js";

//Implementado
export async function getAllOperaciones(req, res) {
    try {
        const data = await obtenerOperaciones();

        res.status(200).json({
            status: 200,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            data: data
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            error: error
        });
    }
}

export async function getOperacionById(req, res) {
    console.log('controller: ',req.params.id)

    try {
        const data = await obtenerOperacion(req.params.id);    

        return res.status(200).json({
            status: 200,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            data: data 
        });    
    } catch (error) {
        return res.status(500).json({
            status: 500,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            error: error
        }); 
    }
    
}

export async function postOperacion(req, res) {
    try {
        
        const data = await guardarOperacion(req.body.tipo, req.body.params);

        return res.status(200).json({
            status: 200,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            data: data 
        });    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            route: `${req.method} ${req.baseUrl} ${req.url}`,
            error: error
        }); 
    }
}

export async function putOperacion(req, res) {
    res.status(201).json({
        status: 200,
        route: `${req.method} ${req.baseUrl} ${req.url}`
    });
}

export async function deleteOperacion(req, res) {
    res.status(200).json({
        status: 200,
        route: `${req.method} ${req.baseUrl} ${req.url}`
    });
}