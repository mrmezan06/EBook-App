const { Upload } = require("../controller/bookController");

const router = require("express").Router();

router.post("/upload/:id", Upload);

module.exports = router;
