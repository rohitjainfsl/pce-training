import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const PORT = 3000;
//BASIC SETUP
const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//DB CONNECTION
await mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => app.listen(PORT, () => console.log("Server Started")));
//SCHEMA & MODEL
const taskSchema = new mongoose.Schema({
  id: { type: String, required: true },
  task: { type: String, required: true },
  status: { type: Boolean, required: true },
});
const Tasks = mongoose.model("task", taskSchema);

// API
app.get("/allTasks", (req, res) => {
  res.send(Tasks.find({}));
});
app.post("/addTask", (req, res) => {
  const dataToAdd = new Tasks(req.body);
  dataToAdd.save();
  res.send("Data Saved");
});
