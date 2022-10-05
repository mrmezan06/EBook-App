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
