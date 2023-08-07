import connection from "../utils/connect.js";

export default class Sucursal_automovil {
  _id;
  ID_Sucursal;
  ID_Automovil;
  Cantidad_Disponible;
  constructor() {}
  async connect() {
    try {
      const result = await connection("sucursal_automovil");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerCarrosDisponibles() {
    try {
      const connection = await this.connect();
      const result = await connection
        .aggregate([
          { $match: { Cantidad_Disponible: { $gt: 0 } } },
          {
            $lookup: {
              from: "automovil",
              localField: "ID_Automovil",
              foreignField: "_id",
              as: "automovil_info",
            },
          },
          { $unwind: "$automovil_info" },
          {
            $lookup: {
              from: "sucursal",
              localField: "ID_Sucursal",
              foreignField: "_id",
              as: "sucursal_info",
            },
          },
          { $unwind: "$sucursal_info" },
          {
            $project: {
              _id: 0,
              Sucursal: "$sucursal_info.Nombre",
              Carro: {
                Marca: "$automovil_info.Marca",
                Modelo: "$automovil_info.Modelo",
                Anio: "$automovil_info.Anio",
                Tipo: "$automovil_info.Tipo",
                Capacidad: "$automovil_info.Capacidad",
                Precio_diario: "$automovil_info.Precio_diario",
              },
              Cantidad_Disponible: 1,
            },
          },
        ])
        .toArray();
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
