const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.Register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = await User.create({
      name,
      email,
      password: hash,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.Login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password",
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET
    );
    // Send without password
    const { password, ...otherDetails } = user.toObject();
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        ...otherDetails,
      });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
