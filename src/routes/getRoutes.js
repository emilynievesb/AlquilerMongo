import { Router } from "express";
import {
  obtenerAlquileresActivosController,
  obtenerCarrosDisponiblesController,
  obtenerClientesController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerClientes", obtenerClientesController);
  router.get("/obtenerCarrosDisponibles", obtenerCarrosDisponiblesController);
  router.get("/obtenerAlquileresActivos", obtenerAlquileresActivosController);
  return router;
};

export { getInitRoute };
