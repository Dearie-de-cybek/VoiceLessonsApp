const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const register = async (req, res) => {
  const { name, email, phone, password, confirmpassword } = req.body;

  if (!name || !email || !phone || !password || !confirmpassword) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({
      statusCode: 400,
      message: "Passwords do not match",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      statusCode: 400,
      message: "Email and password are required",
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        errorStatus: true,
        statusCode: 401,
        message: "Invalid email ",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({
        errorStatus: true,
        statusCode: 401,
        message: "Invalid password",
      });
    }

    const token = jwt.sign({ userId: user.id }, "your_jwt_secret", {
      expiresIn: "1h",
    });

    // req.session.user = user;
    res.status(200).json({ message: "Login successful", token, user: user });
    // Set up a session with user information
    // res.redirect("/dashboard");
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { userId } = req.params;
  const { name, email, phone, password, confirmpassword } = req.body;

  if (!userId) {
    return res.status(400).json({
      statusCode: 400,
      message: "User ID is required",
    });
  }

  if (password !== confirmpassword) {
    return res.status(400).json({
      statusCode: 400,
      message: "Passwords do not match",
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!existingUser) {
      return res.status(404).json({
        statusCode: 404,
        message: "User not found",
      });
    }

    const updatedData = {
      name: name || existingUser.name,
      email: email || existingUser.email,
      phone: phone || existingUser.phone,
    };

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: updatedData,
    });

    res
      .status(200)
      .json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      message: "Something went wrong",
      details: { stacks: error.message },
    });
  }
};

module.exports = { register, login, updateProfile };
