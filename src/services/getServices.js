import { Alquiler } from "../collections/alquiler.js";
import { Automovil } from "../collections/automovil.js";
import Cliente from "../collections/cliente.js";
import { Empleado } from "../collections/empleado.js";
import { Reserva } from "../collections/reserva.js";
import Sucursal_automovil from "../collections/sucursal_automovil.js";

const obtenerClientes = async () => {
  const cliente = new Cliente();
  return await cliente.buscarClientes();
};

const obtenerCarrosDisponibles = async () => {
  const sucursal_automovil = new Sucursal_automovil();
  return await sucursal_automovil.obtenerCarrosDisponibles();
};

const obtenerAlquileresActivos = async () => {
  const alquiler = new Alquiler();
  return await alquiler.buscarAlquileresActivos();
};

const obtenerReservasPendientes = async () => {
  const reserva = new Reserva();
  return await reserva.buscarReservasPendientes();
};

const obtenerDetallesAlquiler = async (id) => {
  const alquiler = new Alquiler();
  alquiler.id = id;
  return await alquiler.buscarDetallesAlquiler();
};

const obtenerVendedores = async () => {
  const empleado = new Empleado();
  return await empleado.obtenerVendedores();
};

const obtenerNumeroCarros = async () => {
  const sucursal_automovil = new Sucursal_automovil();
  return await sucursal_automovil.obtenerNumeroCarros();
};

const obtenerCostoAlquiler = async (id) => {
  const alquiler = new Alquiler();
  alquiler.id = id;
  return await alquiler.obtenerCostoAlquiler();
};

const obtenerClienteDNI = async (DNI) => {
  const cliente = new Cliente();
  cliente.DNI = DNI;
  return await cliente.buscarClienteDNI();
};

const obtenerCarrosGrandes = async () => {
  const automoviles = new Automovil();
  return await automoviles.obtenerCarrosGrandes();
};

const obtenerAlquilerFechaInicio = async () => {
  const alquiler = new Alquiler();
  return await alquiler.obtenerAlquilerFechaInicio();
};

const obtenerReservasPendientesCliente = async (id) => {
  const reservas = new Reserva();
  reservas.ID_Cliente = id;
  return await reservas.obtenerReservasPendientesCliente();
};

const obtenerGerentes = async () => {
  const empleado = new Empleado();
  return await empleado.obtenerGerentes();
};

const obtenerClientesConAlquiler = async () => {
  const alquiler = new Alquiler();
  return await alquiler.clientesConUnAlquiler();
};

const obtenerCarros = async () => {
  const carros = new Automovil();
  return await carros.obtenerCarros();
};

export {
  obtenerClientes,
  obtenerCarrosDisponibles,
  obtenerAlquileresActivos,
  obtenerReservasPendientes,
  obtenerDetallesAlquiler,
  obtenerVendedores,
  obtenerNumeroCarros,
  obtenerCostoAlquiler,
  obtenerClienteDNI,
  obtenerCarrosGrandes,
  obtenerAlquilerFechaInicio,
  obtenerReservasPendientesCliente,
  obtenerGerentes,
  obtenerClientesConAlquiler,
  obtenerCarros,
};
