import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import bunyan from "bunyan";
import {
  name as packageName,
  version as packageVersion,
} from "../package.json";
dotenv.config();

function getLogger(data: {
  name: string;
  version: string;
  level: bunyan.LogLevel;
}) {
  const logger = bunyan.createLogger({
    name: data.name,
    version: data.version,
    level: data.level,
  });
  return logger;
}

const name = packageName;
const version = packageVersion;

const sequelizeConfig = {
  development: {
    name: "development",
    version: "1.0.0",
    servertimeout: 30000,
    postgress: {
      options: {
        username: process.env.DB_USERNAME || "postgres",
        password: process.env.DB_PASSWORD || "berrysam",
        database: process.env.DB_NAME || "data_mingle",
        host: process.env.DB_HOST || "localhost",
        port: parseInt(process.env.DB_PORT || "5432", 10),
        dialect: "postgres",
        // logging: (msg: any) =>
        //   getLogger({ name, version, level: "debug" }).info(msg),
      },
      client: null as unknown as Sequelize,
    },
    log: () => getLogger({ name, version, level: "debug" }),
  },
  test: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "database_test",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432", 10),
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432", 10),
    dialect: "postgres",
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
export default sequelizeConfig;
