import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import { connectToServer } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToServer(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

const start = async () => {
  const connectionDB = await mongoose.connect(
    "mongodb+srv://pv9527_db_user:XGP1VaBahivjGWlR@cluster0.ole6iof.mongodb.net/"
  );
  console.log(`MongoDB Connected to host: ${connectionDB.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log(`listening to port number: 8000`);
  });
};

start();
