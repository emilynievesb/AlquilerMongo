import connection from "../utils/connect.js";

class Automovil {
  constructor() {}
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
}

export { Automovil };
