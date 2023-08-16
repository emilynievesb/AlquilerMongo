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

export { obtenerDetallesAlquilerDTO };
