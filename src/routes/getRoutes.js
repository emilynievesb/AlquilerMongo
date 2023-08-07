import { Router } from "express";
import {
  obtenerCarrosDisponiblesController,
  obtenerClientesController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerClientes", obtenerClientesController);
  router.get("/obtenerCarrosDisponibles", obtenerCarrosDisponiblesController);
  return router;
};

export { getInitRoute };
