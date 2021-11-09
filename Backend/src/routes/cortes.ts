import { Router } from "express";
import { actualizarCorte, agregarCorte, eliminarCorte, obtenerCorte, obtenerCortes } from "../controllers/cortesControllers";

const cortesRoutes = (app)=>{
    const router = Router();
    app.use('/',router);
    router.get('/obtenerCortes',obtenerCortes);
    router.get('/obtenerCorte/:id',obtenerCorte);
    router.post('/agregarCorte',agregarCorte);
    router.put('/actualizarCorte/:id',actualizarCorte);
    router.delete('/eliminarCorte/:id',eliminarCorte);
};
export default cortesRoutes;