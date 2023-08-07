import { Router } from "express";
import {
  obtenerAlquileresActivosController,
  obtenerCarrosDisponiblesController,
  obtenerClientesController,
  obtenerReservasPendientesController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerClientes", obtenerClientesController);
  router.get("/obtenerCarrosDisponibles", obtenerCarrosDisponiblesController);
  router.get("/obtenerAlquileresActivos", obtenerAlquileresActivosController);
  router.get("/obtenerReservasPendientes", obtenerReservasPendientesController);
  return router;
};

export { getInitRoute };
