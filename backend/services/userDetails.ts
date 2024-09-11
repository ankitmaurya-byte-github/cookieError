import userDetailsModel from "../model/userDetailsModel";
import userModel from "../model/userModel";

class UserDetailsService {
  public client: any;
  public models: any;

  constructor(sequelize: any) {
    userDetailsModel(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async addUserDetails({
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

export default UserDetailsService;
