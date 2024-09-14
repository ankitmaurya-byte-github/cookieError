import {
  configCategoryService,
  configInventoryService,
  configLocationService,
} from "../services/configService";
import { Request, response, Response } from "express";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User';
// import { JWT_SECRET } from '../config/constants';
import config from "../config/configs";
import { categoryModel } from "../model/configModel";
export const addLocations = async (req: Request, res: Response) => {
  const configService = new configLocationService(
    config.development.postgress.client
  );
  // console.log(req.body);
  const response = await configService.addLocations(req.body);
  console.log(response);
  return res.status(200).json(response);
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
export const addCategories = async (req: Request, res: Response) => {
  const configService = new configCategoryService(
    config.development.postgress.client
  );
  console.log(req.body);
  try {
    const response = await configService.addCategories(req.body);
    console.log(response);
    console.log("response");
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error adding categories:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while adding categories" });
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
export const addInventoryNorms = async (req: Request, res: Response) => {
  const configService = new configInventoryService(
    config.development.postgress.client
  );
  try {
    const response = await configService.addInventoryNorms(req.body);
    console.log(response);
    console.log("response");
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error adding categories:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while adding categories" });
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
