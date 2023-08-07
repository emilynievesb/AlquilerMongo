import connection from "../utils/connect.js";

class Reserva {
  constructor() {}
  async connect() {
    try {
      const result = await connection("reserva");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async buscarReservasPendientes() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          { $match: { Estado: "Pendiente" } },
          {
            $lookup: {
              from: "cliente",
              localField: "ID_Cliente", //campo en reserva
              foreignField: "_id", //campo en cliente
              as: "cliente_info",
            },
          },
          {
            $unwind: "$cliente_info",
          },
          {
            $lookup: {
              from: "automovil",
              localField: "ID_Automovil", //campo en reserva
              foreignField: "_id", //campo en automovil
              as: "vehiculo_info",
            },
          },
          {
            $unwind: "$vehiculo_info",
          },
          {
            $project: {
              _id: 0,
              Cliente: {
                Nombre: "$cliente_info.Nombre",
                Apellido: "$cliente_info.Apellido",
                DNI: "$cliente_info.DNI",
              },
              Reserva: {
                Fecha_Inicio: "$Fecha_Inicio",
                Fecha_Fin: "$Fecha_Fin",
                Estado: "$Estado",
              },
              Vehiculo: {
                Marca: "$vehiculo_info.Marca",
                Modelo: "$vehiculo_info.Modelo",
                Anio: "$vehiculo_info.Anio",
                Tipo: "$vehiculo_info.Tipo",
                Capacidad: "$vehiculo_info.Capacidad",
                Precio_diario: "$vehiculo_info.Precio_diario",
              },
            },
          },
          {
            $group: {
              _id: "$Cliente",
              reservas: {
                $push: "$Reserva",
              },
              vehiculos: {
                $push: "$Vehiculo",
              },
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Reserva };
