const isAdmin = (req,res,next)=>{
    if(true){

    }else{
        res.status(401).json({message:'No tiene Autorizazcion'});
    }
}
export default isAdmin;