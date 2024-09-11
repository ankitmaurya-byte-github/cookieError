import { DataTypes } from "sequelize";

export const userInfoModel = (sequelize: any) => {
  const User = sequelize.define(
    "userinfo",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      firstname: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  sequelize.sync().then(() => {
    console.log("userDetails Model  synced with database");
  });
};
export const organisationInfoModel = (sequelize: any) => {
  const OrganisationInfo = sequelize.define(
    "organisationinfo",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "userinfo",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      contact_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      address1: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      pincode: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  sequelize.sync().then(() => {
    console.log("userDetails Model  synced with database");
  });
};

// // Sync the model with the database

// export default User;
