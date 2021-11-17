import express from 'express';
import cortesRoutes from './routes/cortes';
import config from './config/config';
import rolesRoutes from './routes/roles';
import errorHandler from './middlewares/errors';

const app = express();
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

cortesRoutes(app);
rolesRoutes(app);
app.use(errorHandler);
app.get('/prueba/:id',async (req, res) => {
    

    res.status(404).json({message:"Todo ok"});
});


app.listen(config.PORT, () => {
    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
