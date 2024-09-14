import { DataTypes } from "sequelize";

export const locationModel = (sequelize: any) => {
  const locationModel = sequelize.define(
    "location",
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

      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      latitude: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      longitude: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  sequelize.sync().then(() => {
    console.log("locationModel Model  synced with database");
  });
};
export const categoryModel = (sequelize: any) => {
  const categoryModel = sequelize.define(
    "category",
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
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
  sequelize.sync().then(() => {
    console.log("categoryModel Model  synced with database");
  });
};
export const inventoryModel = (sequelize: any) => {
  const categoryModel = sequelize.define(
    "inventorynorms",
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

      normbasis: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      level: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      days: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      warehouse: {
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
    console.log("categoryModel Model  synced with database");
  });
};

// // Sync the model with the database

// export default User;
