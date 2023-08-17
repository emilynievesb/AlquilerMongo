import connection from "../utils/connect.js";

class Reserva {
  _id;
  ID_Cliente;
  ID_Automovil;
  Fecha_Reserva;
  Fecha_Inicio;
  Fecha_Fin;
  Estado;
  constructor() {
    this.ID_Cliente = 5;
    this.ID_Automovil = 2;
    this.Fecha_Reserva = "2022-10-20";
    this.Fecha_Inicio = "2022-11-12";
    this.Fecha_Fin = "2022-11-15";
    this.Estado = 1;
  }
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
  async obtenerReservasPendientesCliente() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              ID_Cliente: Number(this.ID_Cliente),
              Estado: "Pendiente",
            },
          },
          {
            $lookup: {
              from: "cliente",
              localField: "ID_Cliente",
              foreignField: "_id",
              as: "cliente_info",
            },
          },
          {
            $unwind: "$cliente_info",
          },
          {
            $project: {
              _id: 0,
              Reserva: {
                ID_Reserva: "$_id",
                Fecha_Inicio: "$Fecha_Inicio",
                Fecha_Fin: "$Fecha_Fin",
              },
              Cliente: {
                Nombre: "$cliente_info.Nombre",
                Apellido: "$cliente_info.Apellido",
                DNI: "$cliente_info.DNI",
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
  async obtenerClienteReserva() {
    try {
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: { _id: Number(this._id) },
          },
          {
            $lookup: {
              from: "cliente",
              localField: "ID_Cliente",
              foreignField: "_id",
              as: "cliente_info",
            },
          },
          {
            $project: {
              Fecha_Inicio: "$Fecha_Inicio",
              Fecha_Fin: "$Fecha_Fin",
              Estado: "$Estado",
              Cliente: "$cliente_info",
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
