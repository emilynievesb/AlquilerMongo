import connection from "../utils/connect.js";

export default class Cliente {
  _id;
  Nombre;
  Apellido;
  DNI;
  Direccion;
  Telefono;
  Email;
  constructor() {}
  async connect() {
    const result = await connection("cliente");
    return result;
  }
  async buscarClientes() {
    const connection = await this.connect();
    const resultado = await connection.find({}).toArray();
    return resultado;
  }
}
