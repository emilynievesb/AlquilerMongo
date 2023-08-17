import connection from "../utils/connect.js";

class Alquiler {
  id;
  ID_Cliente;
  ID_Automovil;
  Fecha_Inicio;
  Fecha_Fin;
  Costo_Total;
  Estado;
  constructor() {
    this.ID_Cliente = 5;
    this.ID_Automovil = 2;
    this.Fecha_Inicio = "2022-11-12";
    this.Fecha_Fin = "2022-11-15";
    this.Costo_Total = 120000;
  }
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
      console.log(error.message);
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
  async obtenerNumeroAlquileres() {
    try {
      const connection = await this.connect();
      const resultado = await connection.countDocuments();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
  async obtenerAlquileresEntreFechas() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .find({
          Fecha_Inicio: {
            $gte: "2024-01-05",
            $lte: "2024-06-10",
          },
        })
        .toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Alquiler };
