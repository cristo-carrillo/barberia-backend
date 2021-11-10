import mysql from 'mysql2';
import config from '../config/config';
import { obtenerCortes } from '../controllers/cortesControllers';
const getConnetion =() =>{
    const connection = mysql.createConnection({
        port: +config.DB_PORT,
        database: config.DATABASE,
        user:config.DB_USER,
        password:config.DB_PASSWORD,
        host:config.DB_HOST,
    });
    connection.connect((error)=>{
        if(error) {
            throw error;
        }else{
            console.log('conexion exitosa');
        }

    });

    return connection;
    
};

const executeQuery =(query:string): Promise<any>=>{
    return new Promise((resolve, reject)=>{
        try{
            const connection = getConnetion();
            connection.query(query,(err, result)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            })
        }catch(err){
            reject(err);
        }
    });
};

export default executeQuery;
//https://github.com/tatianaserrano/rockola1-backend
