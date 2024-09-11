import connectPostgres from "./bin/database";
import app from "./app";
import dotenv from "dotenv";
import UserService from "./services/userServices";
import sequelizeConfig from "./config/configs";
import userModel from "./model/userModel";

// Load environment variables from .env file
dotenv.config({ path: "config/config.env" });
const port = process.env.PORT;
app.listen(port, () => {
  connectPostgres();
  console.log(`Server is running on port ${port}`);
});
