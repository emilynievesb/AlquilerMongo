import Cliente from "../collections/cliente.js";

const obtenerClientes = async () => {
  const cliente = new Cliente();
  return await cliente.buscarClientes();
};

export { obtenerClientes };
