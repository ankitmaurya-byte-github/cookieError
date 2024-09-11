import { Sequelize } from "sequelize";
import sequelizeConfig from "../config/configs";
const config = sequelizeConfig.development;
const log = config.log();
const connectPostgres = async () => {
  const sequelize = new Sequelize(config.postgress.options as any);

  try {
    await sequelize.authenticate();
    log.info("Connection to PostgreSQL has been established successfully.");
    config.postgress.client = sequelize;
  } catch (error) {
    log.error("Unable to connect to the database:", error);
    throw error;
  }
};
export default connectPostgres;
