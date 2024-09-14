import express from "express";
import { addUserDetails, login, register } from "../controllers/userController";
import UserService from "../services/userServices";
import sequelizeConfig from "../config/configs";
import {
  addCategories,
  addInventoryNorms,
  addLocations,
} from "../controllers/configController";
// import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/userController';
// import { protect } from '../middleware/authMiddleware';

const userRouter = express.Router();

// userRouter.post('/register', registerUser);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/adduserdetails", addUserDetails);
userRouter.post("/addlocations", addLocations);
userRouter.post("/addcategories", addCategories);
userRouter.post("/addinventorynorms", addInventoryNorms);
userRouter.post("/test", (req, res) => {
  console.log("Cookies:", req.cookies["user"]);
  res
    .status(200)
    .cookie("user", "Response.dataValues", {
      path: "/",
      httpOnly: true, // Change to false if you need JavaScript access
      secure: false, // Change to false if not using HTTPS locally
      sameSite: "lax", // Use "lax" or "strict" for more secure cross-site behavior
      domain: "localhost",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    })
    .json("Response");
});
// userRouter.route("/profile");
// .get(protect, getUserProfile)
// .put(protect, updateUserProfile);

export default userRouter;
