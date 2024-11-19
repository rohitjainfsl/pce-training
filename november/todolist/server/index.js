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
  .connect("mongodb://127.0.0.1:27017/todolist")
  .then(() => app.listen(PORT, () => console.log("Server Started")));
//SCHEMA & MODEL
const taskSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  task: { type: String, required: true },
  status: { type: String, required: true },
});
const Tasks = mongoose.model("task", taskSchema);

// API
app.get("/allTasks", async (req, res) => {
  const allTasks = await Tasks.find();
  res.send(allTasks);
});
app.post("/addTask", (req, res) => {
  const dataToAdd = new Tasks(req.body);
  dataToAdd.save();
  res.send("Data Saved");
});
app.delete("/deleteTask/:id", async (req, res) => {
  const idToDelete = req.params.id;
  const taskToDelete = Tasks.findOne({ id: idToDelete });
  if (!taskToDelete) res.status(404).send("id not found");
  try {
    await Tasks.findByIdAndDelete(idToDelete);
    res.send("Deleted");
  } catch (err) {
    console.log(err);
  }
});
app.put("/updateTask/:id", async (req, res) => {
  const idToEdit = req.params.id;
  const taskToEdit = Tasks.findOne({ id: idToEdit });
  if (!taskToEdit) res.status(404).send("id not found");
  try {
    await Tasks.findByIdAndUpdate(idToEdit, req.body);
    res.send("Updated");
  } catch (err) {
    console.log(err);
  }
});
