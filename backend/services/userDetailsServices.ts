import {
  organisationInfoModel,
  userInfoModel,
} from "../model/userDetailsModel";
import userModel from "../model/userModel";

class UserDetailsService {
  public client: any;
  public models: any;

  constructor(sequelize: any) {
    organisationInfoModel(sequelize);
    userInfoModel(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }
  async addUserDetails({
    userInfo,
    organisationInfo,
  }: {
    userInfo: Record<string, unknown>;
    organisationInfo: Record<string, unknown>;
  }): Promise<any> {
    try {
      const user = await this.models.userinfo.create(userInfo);
      const organisation = await this.models.organisationinfo.create({
        user_id: 4,
        ...organisationInfo,
      });
      return { userInfo: user, organisationInfo: organisation };
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error instanceof Error) {
        throw new Error(
          `${error.message}: ${(error as any).description || ""}`
        );
      } else {
        throw new Error("An unknown error occurred");
      }
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
