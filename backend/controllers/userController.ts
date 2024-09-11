import { Request, response, Response } from "express";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User';
// import { JWT_SECRET } from '../config/constants';
import config from "../config/configs";
import UserService from "../services/userServices";

export const register = async (req: Request, res: Response) => {
  const user = new UserService(config.development.postgress.client);
  const Response = await user.createUser({
    email: req.body.email,
    password: req.body.password,
  });
  // console.log(response);
  res.cookie("user", response);
  res.status(200).json(Response);
  // try {
  //   const { email, password } = req.body;
  //   // Check if user exists
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }
  //   // Check password
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }
  //   // Generate JWT token
  //   const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  //   res.json({
  //     token,
  //     user: {
  //       id: user._id,
  //       name: user.name,
  //       email: user.email
  //     }
  //   });
  // } catch (error) {
  //   console.error('Login error:', error);
  //   res.status(500).json({ message: 'Server error' });
  // }
};
export const login = async (req: Request, res: Response) => {
  const user = new UserService(config.development.postgress.client);
  const Response = await user.findUser(req.body.email);
  if (!Response) {
    res.status(404).json({ message: "email not found" });
  } else {
    if (Response.password === req.body.password) {
      res.cookie("user", Response.dataValues);
      console.log(Response.dataValues);
      res.status(200).json(Response);
    } else {
      res.status(404).json({ message: "password doesnt match" });
    }
  }
  // try {
  //   const { email, password } = req.body;
  //   // Check if user exists
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }
  //   // Check password
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }
  //   // Generate JWT token
  //   const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  //   res.json({
  //     token,
  //     user: {
  //       id: user._id,
  //       name: user.name,
  //       email: user.email
  //     }
  //   });
  // } catch (error) {
  //   console.error('Login error:', error);
  //   res.status(500).json({ message: 'Server error' });
  // }
};
export const addUserDetails = async (req: Request, res: Response) => {
  const user = new UserService(config.development.postgress.client);
  const Response = await user.findUser(req.body.email);
  if (!Response) {
    res.status(404).json({ message: "email not found" });
  } else {
    if (Response.password == req.body.password) {
      res.cookie("user", JSON.stringify(Response.dataValues));
      console.log(Response.dataValues);
      res.status(200).json(Response);
    } else {
      res.status(404).json({ message: "password doesnt match" });
    }
  }
  // try {
  //   const { email, password } = req.body;
  //   // Check if user exists
  //   const user = await User.findOne({ email });
  //   if (!user) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }
  //   // Check password
  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) {
  //     return res.status(400).json({ message: 'Invalid credentials' });
  //   }
  //   // Generate JWT token
  //   const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  //   res.json({
  //     token,
  //     user: {
  //       id: user._id,
  //       name: user.name,
  //       email: user.email
  //     }
  //   });
  // } catch (error) {
  //   console.error('Login error:', error);
  //   res.status(500).json({ message: 'Server error' });
  // }
};
