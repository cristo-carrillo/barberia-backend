import { Router } from "express";
import { actualizarCorte, agregarCorte, eliminarCorte, obtenerCorte, obtenerCortes } from "../controllers/cortesControllers";
import isAdmin from "../middlewares/admin";
import errorHandler from "../middlewares/errors";

const cortesRoutes = (app)=>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerCortes',isAdmin,obtenerCortes);
    router.get('/obtenerCorte/:id',obtenerCorte);
    router.post('/agregarCorte',agregarCorte);
    router.put('/actualizarCorte/:id',actualizarCorte);
    router.delete('/eliminarCorte/:id',eliminarCorte);
};
export default cortesRoutes;