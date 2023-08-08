import connection from "../utils/connect.js";

class Alquiler {
  id;
  ID_Cliente;
  ID_Automovil;
  Fecha_Reserva;
  Fecha_Inicio;
  Fecha_Fin;
  Estado;
  constructor() {}
  async connect() {
    try {
      const result = await connection("alquiler");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async buscarAlquileresActivos() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          { $match: { Estado: "Confirmada" } },
          {
            $lookup: {
              from: "cliente",
              localField: "ID_Cliente", //id a comparar en la tabla alquiler
              foreignField: "_id", //id a comparar en la tabla cliente
              as: "cliente_info",
            },
          },
          {
            $unwind: "$cliente_info",
          },
          {
            $group: {
              _id: "$ID_Cliente",
              cliente_info: { $first: "$cliente_info" },
              alquileres: {
                $push: {
                  ID_Alquiler: "$ID_Alquiler",
                  Fecha_Inicio: "$Fecha_Inicio",
                  Fecha_Fin: "$Fecha_Fin",
                  Estado: "$Estado",
                },
              },
            },
          },
          {
            $project: {
              _id: 0,
              cliente_info: {
                Name: "$cliente_info.Nombre",
                Lastname: "$cliente_info.Apellido",
                Document: "$cliente_info.DNI",
              },
              alquileres: 1,
            },
          },
        ])
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async buscarDetallesAlquiler() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ _id: Number(this.id) })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async obtenerCostoAlquiler() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ _id: Number(this.id) })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async obtenerAlquilerFechaInicio() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({ Fecha_Inicio: { $eq: "2024-05-10" } })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async clientesConUnAlquiler() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "cliente",
              localField: "ID_Cliente",
              foreignField: "_id",
              as: "datos-cliente",
            },
          },
          {
            $unwind: "$datos-cliente",
          },
          {
            $project: {
              Fecha_Inicio: "$Fecha_Inicio",
              Fecha_Fin: "$Fecha_Fin",
              Estado: "$Estado",
              Cliente: "$datos-cliente",
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

export { Alquiler };
