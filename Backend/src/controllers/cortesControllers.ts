import executeQuery from "../services/mysql.service";

const obtenerCortes=async (req, res,next) =>{
    await executeQuery('SELECT * FROM corte').then((response)=>{
        res.json({
            data:response
        });
    }).catch((error)=>{
        next(error);
    })
}

const obtenerCorte=async (req,res,next) =>{
    try{
        const response =await executeQuery(`SELECT * FROM corte WHERE id_corte=${req.params.id}`)
        res.send(response);
    }catch(error){
        next(error);
    }
}
const agregarCorte=async (req,res,next) =>{
    try{
        const {nombre,precio,descripcion,estado}=req.body;
        const response =await executeQuery(`INSERT INTO corte (nombre,precio,descripcion,estado) VALUES('${nombre}',${precio},'${descripcion}','${estado}')`)
        res.status(200).json({message:'created',id: response.insertId});
    }catch(error){
        next(error);
    }
}







const actualizarCorte=(req,res,next) =>{
    const {nombre,precio,descripcion,estado}=req.body;
    const {id}= req.params;
    executeQuery(`UPDATE corte SET nombre='${nombre}',precio=${precio}, descripcion='${descripcion}',estado='${estado}' WHERE id_corte=${id}`).then((response)=>{
        res.json({message:'update'});
    }).catch((error)=>{
        next(error);
    })
}
const eliminarCorte=(req,res,next) =>{
    const {id}= req.params;
    executeQuery(`DELETE FROM corte WHERE id_corte=${id}`).then((response)=>{
        res.json({message:'DELETED'});
    }).catch((error)=>{
        next(error);
    })
}
export {obtenerCortes,obtenerCorte,agregarCorte,actualizarCorte,eliminarCorte};
