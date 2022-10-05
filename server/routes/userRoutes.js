const { Register, Login } = require("../controller/userController");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);

module.exports = router;
