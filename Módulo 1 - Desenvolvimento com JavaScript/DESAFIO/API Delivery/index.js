import express from "express";
import Router from "./routes/brand.js";
const app = express();
app.use("/pedidos", Router);
app.listen(3000, () => console.log("API Started"));
