import express from 'express';
import cortesRoutes from './routes/cortes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

cortesRoutes(app);

app.get('/prueba/:id',async (req, res) => {
    

    res.status(404).json({message:"Todo ok"});
});


app.listen(port, () => {
    return console.log(`servidor corriendo en el puerto ${port}`);
});
