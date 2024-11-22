import User from "../models/User.js";
import bcrypt from "bcrypt";

export async function registerUser(req, res) {
  try {
    const { name, email, gender, password, phoneNumber } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create new user
    const newUser = new User({
      name,
      email,
      gender,
      password,
      phoneNumber,
    });

    // Save user
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Check if email is correct
    const emailExists = await User.findOne({ email });
    if (!emailExists) {
      return res.status(500).json({ message: "Invalid Email" });
    }

    //Check if password is correct
    const match = await bcrypt.compare(password, emailExists.password);

    if (match) {
      return res.status(200).json({ message: "Login Successful" });
    }

    res.status(500).json({
      message: "Password Do not match",
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
}
