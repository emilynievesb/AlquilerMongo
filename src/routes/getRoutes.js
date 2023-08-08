import { Router } from "express";
import {
  obtenerAlquilerFechaInicioController,
  obtenerAlquileresActivosController,
  obtenerCarrosDisponiblesController,
  obtenerCarrosGrandesController,
  obtenerClienteDNIController,
  obtenerClientesController,
  obtenerCostoAlquilerController,
  obtenerDetallesAlquilerController,
  obtenerNumeroCarrosController,
  obtenerReservasPendientesClienteController,
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
  router.get("/obtenerCostoAlquiler", obtenerCostoAlquilerController);
  router.get("/obtenerClienteDNI", obtenerClienteDNIController);
  router.get("/obtenerCarrosGrandes", obtenerCarrosGrandesController);
  router.get(
    "/obtenerAlquilerFechaInicio",
    obtenerAlquilerFechaInicioController
  );
  router.get(
    "/obtenerReservasPendientesCliente",
    obtenerReservasPendientesClienteController
  );
  return router;
};

export { getInitRoute };
