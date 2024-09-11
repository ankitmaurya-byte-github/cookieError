import {
  organisationInfoModel,
  userInfoModel,
} from "../model/userDetailsModel";
import userModel from "../model/userModel";

class UserService {
  public client: any;
  public models: any;

  constructor(sequelize: any) {
    userModel(sequelize);

    this.client = sequelize;
    this.models = sequelize.models;
  }

  async createUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<any> {
    try {
      console.log(email + password);
      const user = await this.models.users.create({ email, password });
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      return error;
    }
  }
  async findUser(email: string): Promise<any> {
    try {
      const user = await this.models.users.findOne({ where: { email } });
      return user;
    } catch (error) {
      console.error("Error checking user existence:", error);
      return {
        sucess: false,
      };
    }
  }
}

export default UserService;
