import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { unit, unitId } from "./unit";

export interface unit_categoryAttributes {
  id: number;
  name?: string;
  priority?: number;
  is_active?: boolean;
  is_delete?: boolean;
}

export type unit_categoryPk = "id";
export type unit_categoryId = unit_category[unit_categoryPk];
export type unit_categoryOptionalAttributes =
  | "id"
  | "name"
  | "priority"
  | "is_active"
  | "is_delete";
export type unit_categoryCreationAttributes = Optional<
  unit_categoryAttributes,
  unit_categoryOptionalAttributes
>;

export class unit_category
  extends Model<unit_categoryAttributes, unit_categoryCreationAttributes>
  implements unit_categoryAttributes
{
  id!: number;
  name?: string;
  priority?: number;
  is_active?: boolean;
  is_delete?: boolean;

  // unit_category hasMany unit via unit_category_id
  units!: unit[];
  getUnits!: Sequelize.HasManyGetAssociationsMixin<unit>;
  setUnits!: Sequelize.HasManySetAssociationsMixin<unit, unitId>;
  addUnit!: Sequelize.HasManyAddAssociationMixin<unit, unitId>;
  addUnits!: Sequelize.HasManyAddAssociationsMixin<unit, unitId>;
  createUnit!: Sequelize.HasManyCreateAssociationMixin<unit>;
  removeUnit!: Sequelize.HasManyRemoveAssociationMixin<unit, unitId>;
  removeUnits!: Sequelize.HasManyRemoveAssociationsMixin<unit, unitId>;
  hasUnit!: Sequelize.HasManyHasAssociationMixin<unit, unitId>;
  hasUnits!: Sequelize.HasManyHasAssociationsMixin<unit, unitId>;
  countUnits!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof unit_category {
    return unit_category.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        priority: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        is_delete: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: "unit_category",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "unit_category_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
