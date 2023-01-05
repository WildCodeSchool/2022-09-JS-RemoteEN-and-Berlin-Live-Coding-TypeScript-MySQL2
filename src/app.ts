import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import database from "./database";

// Explicit:
// const BACKEND_PORT = parseInt(process.env.BACKEND_PORT ?? "5005", 10);
// Implicit:
const BACKEND_PORT = process.env.BACKEND_PORT ?? 5005;

const app = express();
app.use(cors());
app.use(express.json());



app.listen(BACKEND_PORT, () => {
  console.log("Listening on port", BACKEND_PORT);
})