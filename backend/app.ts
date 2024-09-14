import express, { Request, Response, Application } from "express";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import cookieParser from "cookie-parser";
// Create an Express app
const app: Application = express();
// Define the port from environment variables or default to 3000
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Define a simple route
app.use(userRouter);

// Start the server

export default app;
