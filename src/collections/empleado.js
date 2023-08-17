import connection from "../utils/connect.js";

class Empleado {
  _id;
  Nombre;
  Apellido;
  DNI;
  Direccion;
  Telefono;
  Cargo;
  constructor() {
    this.Nombre = "Karen";
    this.Apellido = "Urbano";
    this.DNI = 31666666;
    this.Direccion = "Cra 115";
    this.Telefono = 3023635888;
    this.Cargo = "Gerente";
  }
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
  async obtenerGerentes() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({ Cargo: "Gerente" }).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Empleado };
