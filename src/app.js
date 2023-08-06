import express from "express";
import connection from "./utils/connect.js";
// import { initAPIRoutes } from "./routes/routes.js";

const app = express();
app.use(express.json()); //! Middleware para leer json
app.use("/api", async () => {
  await connection();
});

// app.use("/api", initAPIRoutes());

export default app;
