import {
  categoryModel,
  inventoryModel,
  locationModel,
} from "../model/configModel";

export class configLocationService {
  public client: any;
  public models: any;

  constructor(sequelize: any) {
    locationModel(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async addLocations({
    locations,
  }: {
    locations: Record<
      string,
      { location: string; latitude: string; longitude: string }
    >;
  }): Promise<any> {
    try {
      const data: Record<
        string,
        { location: string; latitude: string; longitude: string }
      > = {};
      console.log(locations);
      for (const [key, value] of Object.entries(locations)) {
        console.log(key);
        console.log(value);
        const location = await this.models.location.create({
          user_id: 4,
          ...value,
        });
        data[key] = location.dataValues;
      }
      return data;
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
}
export class configCategoryService {
  public client: any;
  public models: any;

  constructor(sequelize: any) {
    categoryModel(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async addCategories(categories: [{ name: string }]): Promise<any> {
    try {
      const updatedCategories = categories.map((item) => {
        return { ...item, user_id: 4 };
      });
      console.log(updatedCategories);
      const categoryResponse = await this.models.category.bulkCreate(
        updatedCategories
      );
      console.log(categories);

      return categories;
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
}
export class configInventoryService {
  public client: any;
  public models: any;

  constructor(sequelize: any) {
    inventoryModel(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async addInventoryNorms(inventoryNorms: {
    normBasis: string;
    level: string;
    days: string;
    warehouse: string;
  }): Promise<any> {
    try {
      console.log(inventoryNorms);
      const inventory = await this.models.inventorynorms.create({
        user_id: 4,
        ...inventoryNorms,
      });
      return inventory.dataValues;
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
}
