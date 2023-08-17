import { object, number } from "yup";

const obtenerDetallesAlquilerDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      id: number().positive().required("El id a buscar es requerido"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerCostoAlquilerDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      id: number().positive().required("El id a buscar es requerido"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerClienteDNIDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      DNI: number().positive().required("El DNI a buscar es requerido"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerReservasPendientesClienteDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      ID_Cliente: number()
        .positive()
        .required("El ID_Cliente a buscar es requerido"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

const obtenerClienteReservaDTO = async (req, res, next) => {
  try {
    const productSchema = object({
      id: number().positive().required("El id a buscar es requerido"),
    });
    await productSchema.validate(req.query);
    next();
  } catch (error) {
    res.status(400).json({ status: "fail", message: error.errors });
  }
};

export {
  obtenerDetallesAlquilerDTO,
  obtenerCostoAlquilerDTO,
  obtenerClienteDNIDTO,
  obtenerReservasPendientesClienteDTO,
  obtenerClienteReservaDTO,
};
