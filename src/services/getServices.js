import { Alquiler } from "../collections/alquiler.js";
import Cliente from "../collections/cliente.js";
import { Reserva } from "../collections/reserva.js";
import Sucursal_automovil from "../collections/sucursal_automovil.js";

const obtenerClientes = async () => {
  const cliente = new Cliente();
  return await cliente.buscarClientes();
};

const obtenerCarrosDisponibles = async () => {
  const sucursal_automovil = new Sucursal_automovil();
  return sucursal_automovil.obtenerCarrosDisponibles();
};

const obtenerAlquileresActivos = async () => {
  const alquiler = new Alquiler();
  return alquiler.buscarAlquileresActivos();
};

const obtenerReservasPendientes = async () => {
  const reserva = new Reserva();
  return reserva.buscarReservasPendientes();
};

const obtenerDetallesAlquiler = async (id) => {
  const alquiler = new Alquiler();
  alquiler.id = id;
  return alquiler.buscarDetallesAlquiler();
};

export {
  obtenerClientes,
  obtenerCarrosDisponibles,
  obtenerAlquileresActivos,
  obtenerReservasPendientes,
  obtenerDetallesAlquiler,
};
