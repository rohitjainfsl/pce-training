import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT;
await mongoose.connect(process.env.MONGODBURL);
app.listen(PORT, () => console.log("Server started at port " + PORT));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
