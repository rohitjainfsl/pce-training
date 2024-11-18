import express from "express";
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

app.get("/names", (req, res) => {
  res.send(names);
});
app.post("/add", (req, res) => {
  const newName = req.body();
  const dataToAdd = new names(newName);
  dataToAdd.save();
  res.send(names);
});
app.delete("/delete/:id", (req, res) => {
  const idToDelete = req.params.id;
  names.findByIdAndDelete({ idToDelete });
  res.send(names);
});

app.listen(PORT, () => {
  console.log("Server started at port " + PORT);
});
