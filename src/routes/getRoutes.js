import { Router } from "express";
import {
  obtenerAlquilerFechaInicioController,
  obtenerAlquileresActivosController,
  obtenerCarrosController,
  obtenerCarrosDisponiblesController,
  obtenerCarrosGrandesController,
  obtenerClienteDNIController,
  obtenerClientesConAlquilerController,
  obtenerClientesController,
  obtenerCostoAlquilerController,
  obtenerDetallesAlquilerController,
  obtenerGerentesController,
  obtenerNumeroCarrosController,
  obtenerNumeroCarrosSucursalController,
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
  router.get("/obtenerGerentes", obtenerGerentesController);
  router.get(
    "/obtenerClientesConAlquiler",
    obtenerClientesConAlquilerController
  );
  router.get("/obtenerCarros", obtenerCarrosController);
  router.get(
    "/obtenerNumeroCarrosSucursal",
    obtenerNumeroCarrosSucursalController
  );
  return router;
};

export { getInitRoute };
