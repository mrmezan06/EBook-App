const Book = require("../model/book");

exports.Upload = async (req, res) => {
  try {
    const { title, author, description, category, image, bookUrl } = req.body;
    const UserId = req.params.id;

    const book = await Book.create({
      title,
      author,
      description,
      category,
      image,
      bookUrl,
      userId: UserId,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.GetBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

// Update a book
exports.UpdateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Delete a book
exports.DeleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
