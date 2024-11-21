import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
import mongoose from "mongoose";

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const response = await mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
if (response) app.listen(PORT, () => console.log("Server Started at " + PORT));

app.use("/api", router);
