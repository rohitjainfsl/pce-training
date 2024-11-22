import { Router } from "express";
import { Books } from "../models/Books.js";

const router = Router();

router.get("/books", async (req, res) => {
  try {
    const books = await Books.find({});
    res.send(books);
  } catch (err) {
    console.log(err);
  }
});

router.get("/books/:id", async (req, res) => {
  const idToFind = req.params.id;
  if (!idToFind)
    return res.status(500).send({ message: "Must specify a book id" });

  try {
    const book = await Books.findById(idToFind);
    if (!book)
      return res.status(500).send({ message: "No book found with given ID" });

    res.send(book);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/books/:id", async (req, res) => {
  const idToDelete = req.params.id;
  if (!idToDelete)
    return res.status(500).send({ message: "Must specify a book id" });

  try {
    const book = await Books.findByIdAndDelete(idToDelete);
    if (!book)
      return res.status(500).send({ message: "No book found with given ID" });

    res.send({ message: "Book Deleted" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/books/add", async (req, res) => {
  try {
    const { title, author, genre, description, price, image } = req.body;
    const newBook = new Books({
      title,
      author,
      genre,
      description,
      price,
      image,
    });
    await newBook.save();
    res.status(201).send({ message: "Book Added" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

export default router;
