import {
  obtenerAlquileresActivos,
  obtenerCarrosDisponibles,
  obtenerClientes,
  obtenerDetallesAlquiler,
  obtenerNumeroCarros,
  obtenerReservasPendientes,
  obtenerVendedores,
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

const obtenerReservasPendientesController = async (req, res, next) => {
  try {
    const reservas = await obtenerReservasPendientes();
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerDetallesAlquilerController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const detalles = await obtenerDetallesAlquiler(id);
    res.status(200).json(detalles);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerVendedoresController = async (req, res, next) => {
  try {
    const vendedores = await obtenerVendedores();
    res.status(200).json(vendedores);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerNumeroCarrosController = async (req, res, next) => {
  try {
    const numero = await obtenerNumeroCarros();
    res.status(200).json(numero);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  obtenerClientesController,
  obtenerCarrosDisponiblesController,
  obtenerAlquileresActivosController,
  obtenerReservasPendientesController,
  obtenerDetallesAlquilerController,
  obtenerVendedoresController,
  obtenerNumeroCarrosController,
};
