import { obtenerClientes } from "../services/getServices.js";

const obtenerClientesController = async (req, res, next) => {
  try {
    const clientes = await obtenerClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { obtenerClientesController };
