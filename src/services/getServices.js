import Cliente from "../collections/cliente.js";
import Sucursal_automovil from "../collections/sucursal_automovil.js";

const obtenerClientes = async () => {
  const cliente = new Cliente();
  return await cliente.buscarClientes();
};

const obtenerCarrosDisponibles = async () => {
  const sucursal_automovil = new Sucursal_automovil();
  return sucursal_automovil.obtenerCarrosDisponibles();
};

export { obtenerClientes, obtenerCarrosDisponibles };
