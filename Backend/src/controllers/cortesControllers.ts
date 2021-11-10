import executeQuery from "../services/mysql.service";

const obtenerCortes=async (req,res) =>{
    await executeQuery('SELECT * FROM corte').then((response)=>{

        res.json({
            data:response
        });
    }).catch((error)=>{
        res.status(500).send(error);
    })
    res.send('Respuesta desde el controlador');
}
const obtenerCorte=(req,res) =>{
    console.log("entra a obtener corte")
}
const agregarCorte=(req,res) =>{
    console.log("entra a obtener cortes")
}
const actualizarCorte=(req,res) =>{
    console.log("entra a obtener cortes")
}
const eliminarCorte=(req,res) =>{
    console.log("entra a obtener cortes")
}
export {obtenerCortes,obtenerCorte,agregarCorte,actualizarCorte,eliminarCorte};
