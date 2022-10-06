const {
  Upload,
  GetBooks,
  DeleteBook,
  UpdateBook,
} = require("../controller/bookController");
const { verifyAdmin, verifyUser } = require("../utils/Verify");

const router = require("express").Router();

router.post("/upload/:uid", verifyUser, Upload);
router.get("/getBooks", GetBooks);
router.delete("/delete/:id", verifyAdmin, DeleteBook);
// Update by User
router.put("/update/user/:uid/:id", verifyUser, UpdateBook);
// Update by Admin
router.put("/update/admin/:id", verifyAdmin, UpdateBook);

module.exports = router;