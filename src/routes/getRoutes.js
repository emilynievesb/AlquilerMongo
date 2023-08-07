import { Router } from "express";
import { obtenerClientesController } from "../controllers/getControllers.js";

const getInitRoute = () => {
  const router = Router();
  router.get("/obtenerClientes", obtenerClientesController);
  return router;
};

export { getInitRoute };
