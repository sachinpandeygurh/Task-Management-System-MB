import userModel from '../models/UserModel.js';
import jwt from 'jsonwebtoken'; 
import bcrypt from "bcrypt";

export async function register(req, res) {
  try {
    const { email, name, password } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Name is required" });
    }

    if (!email) {
      return res.status(400).send({ error: "Email is required" });
    }

    if (!password) {
      return res.status(400).send({ error: "Password is required" });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).send({ error: "User already exists. Please log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await new userModel({ name, email, password: hashedPassword }).save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
      token, 
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Error in registration", error });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
}
