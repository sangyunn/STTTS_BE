import cors from "cors";
import express from "express";
import { RouterFn } from "./routers/index.js";
import { errorHandler } from "./middlewares/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", RouterFn);

app.use(errorHandler);

export { app };
