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
    try {
      const result = await connection("cliente");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async buscarClientes() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({}).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async buscarClienteDNI() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ DNI: Number(this.DNI) })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
