import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const nameModel = mongoose.model("name", nameSchema);
mongoose.connect("mongodb://127.0.0.1:27017/");

const app = express();
const PORT = 3000;

const names = [
  {
    id: 1,
    name: "Ramesh",
  },
  {
    id: 2,
    name: "Suresh",
  },
];

app.use(cors({ origin: "http://localhost:5174" }));

// TELLING MY SERVER TO ALLOW REQUESTS WITH DATA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/names", (req, res) => {
  res.send(names);
});
app.post("/add", (req, res) => {
  console.log(req.body);
  const newName = req.body;
  const dataToAdd = new nameModel(newName);
  dataToAdd.save();
  res.send("Data Saved");
});
app.delete("/delete/:id", (req, res) => {
  const idToDelete = req.params.id;
  nameModel.findByIdAndDelete({ idToDelete });
  res.send(names);
});

app.listen(PORT, () => {
  console.log("Server started at port " + PORT);
});
