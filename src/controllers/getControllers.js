import {
  obtenerAlquilerFechaInicio,
  obtenerAlquileresActivos,
  obtenerCarrosDisponibles,
  obtenerCarrosGrandes,
  obtenerClienteDNI,
  obtenerClientes,
  obtenerCostoAlquiler,
  obtenerDetallesAlquiler,
  obtenerGerentes,
  obtenerNumeroCarros,
  obtenerReservasPendientes,
  obtenerReservasPendientesCliente,
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

const obtenerCostoAlquilerController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const costo = await obtenerCostoAlquiler(id);
    res.status(200).json(costo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerClienteDNIController = async (req, res, next) => {
  try {
    const { DNI } = req.query;
    const cliente = await obtenerClienteDNI(DNI);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerCarrosGrandesController = async (req, res, next) => {
  try {
    const carros = await obtenerCarrosGrandes();
    res.status(200).json(carros);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerAlquilerFechaInicioController = async (req, res, next) => {
  try {
    const alquiler = await obtenerAlquilerFechaInicio();
    res.status(200).json(alquiler);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerReservasPendientesClienteController = async (req, res, next) => {
  try {
    const { ID_Cliente } = req.query;
    const reservas = await obtenerReservasPendientesCliente(ID_Cliente);
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json(error);
  }
};

const obtenerGerentesController = async (req, res, next) => {
  try {
    const gerentes = await obtenerGerentes();
    res.status(200).json(gerentes);
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
  obtenerCostoAlquilerController,
  obtenerClienteDNIController,
  obtenerCarrosGrandesController,
  obtenerAlquilerFechaInicioController,
  obtenerReservasPendientesClienteController,
  obtenerGerentesController,
};
