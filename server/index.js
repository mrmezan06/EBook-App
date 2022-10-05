const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cokieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cokieParser());

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/auth", userRoutes);
app.use("/books", bookRoutes);
