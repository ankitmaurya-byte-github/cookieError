import express from "express";
import { addUserDetails, login, register } from "../controllers/userController";
import UserService from "../services/userServices";
import sequelizeConfig from "../config/configs";
// import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/userController';
// import { protect } from '../middleware/authMiddleware';

const userRouter = express.Router();

// userRouter.post('/register', registerUser);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/adduserdetails", addUserDetails);
userRouter.post("/test", (req, res) => {
  console.log("Cookies:", req.cookies["user"]);
  res.status(200).json({ message: "Cookies logged successfully" });
});
// userRouter.route("/profile");
// .get(protect, getUserProfile)
// .put(protect, updateUserProfile);

export default userRouter;
