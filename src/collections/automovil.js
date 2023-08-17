import connection from "../utils/connect.js";

class Automovil {
  Marca;
  Modelo;
  Anio;
  Tipo;
  Capacidad;
  Precio_diario;
  constructor() {
    this.Marca = "Mazda";
    this.Modelo = "323NX";
    this.Anio = 1995;
    this.Tipo = "Clasico";
    this.Capacidad = "4";
    this.Precio_diario = 30000;
  }
  async connect() {
    try {
      const result = await connection("automovil");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerCarrosGrandes() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ Capacidad: { $gte: 5 } })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async obtenerCarros() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find()
        .sort({ Marca: 1, Modelo: 1 })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Automovil };
