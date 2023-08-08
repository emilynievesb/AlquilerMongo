import { Router } from "express";
import {
  obtenerAlquileresActivosController,
  obtenerCarrosDisponiblesController,
  obtenerClientesController,
  obtenerDetallesAlquilerController,
  obtenerNumeroCarrosController,
  obtenerReservasPendientesController,
  obtenerVendedoresController,
} from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerClientes", obtenerClientesController);
  router.get("/obtenerCarrosDisponibles", obtenerCarrosDisponiblesController);
  router.get("/obtenerAlquileresActivos", obtenerAlquileresActivosController);
  router.get("/obtenerReservasPendientes", obtenerReservasPendientesController);
  router.get("/obtenerDetallesAlquiler", obtenerDetallesAlquilerController);
  router.get("/obtenerVendedores", obtenerVendedoresController);
  router.get("/numeroAutosDisponibles", obtenerNumeroCarrosController);
  return router;
};

export { getInitRoute };
