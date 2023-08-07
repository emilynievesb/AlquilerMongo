import {
  obtenerAlquileresActivos,
  obtenerCarrosDisponibles,
  obtenerClientes,
} from "../services/getServices.js";

const obtenerClientesController = async (req, res, next) => {
  try {
    const clientes = await obtenerClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerCarrosDisponiblesController = async (req, res, next) => {
  try {
    const carros = await obtenerCarrosDisponibles();
    res.status(200).json(carros);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerAlquileresActivosController = async (req, res, next) => {
  try {
    const alquileres = await obtenerAlquileresActivos();
    res.status(200).json(alquileres);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  obtenerClientesController,
  obtenerCarrosDisponiblesController,
  obtenerAlquileresActivosController,
};
