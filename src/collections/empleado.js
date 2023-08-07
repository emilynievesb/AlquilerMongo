import connection from "../utils/connect.js";

class Empleado {
  constructor() {}
  async connect() {
    try {
      const result = await connection("empleado");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerVendedores() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({ Cargo: "Vendedor" }).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Empleado };
