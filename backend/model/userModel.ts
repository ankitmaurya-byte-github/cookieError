import { DataTypes } from "sequelize";

const userModel = (sequelize: any) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: false,
    }
  );
  sequelize.sync().then(() => {
    console.log("User model synced with database");
  });
  return User;
};

export default userModel;

// // Sync the model with the database

// export default User;
