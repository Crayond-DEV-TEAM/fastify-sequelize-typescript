import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { property, propertyId } from "./property";
import type { unit, unitId } from "./unit";

export interface area_metricAttributes {
  id: number;
  name?: string;
  priority?: number;
  is_active?: boolean;
  is_delete?: boolean;
}

export type area_metricPk = "id";
export type area_metricId = area_metric[area_metricPk];
export type area_metricOptionalAttributes =
  | "id"
  | "name"
  | "priority"
  | "is_active"
  | "is_delete";
export type area_metricCreationAttributes = Optional<
  area_metricAttributes,
  area_metricOptionalAttributes
>;

export class area_metric
  extends Model<area_metricAttributes, area_metricCreationAttributes>
  implements area_metricAttributes
{
  id!: number;
  name?: string;
  priority?: number;
  is_active?: boolean;
  is_delete?: boolean;

  // area_metric hasMany property via area_metric
  properties!: property[];
  getProperties!: Sequelize.HasManyGetAssociationsMixin<property>;
  setProperties!: Sequelize.HasManySetAssociationsMixin<property, propertyId>;
  addProperty!: Sequelize.HasManyAddAssociationMixin<property, propertyId>;
  addProperties!: Sequelize.HasManyAddAssociationsMixin<property, propertyId>;
  createProperty!: Sequelize.HasManyCreateAssociationMixin<property>;
  removeProperty!: Sequelize.HasManyRemoveAssociationMixin<
    property,
    propertyId
  >;
  removeProperties!: Sequelize.HasManyRemoveAssociationsMixin<
    property,
    propertyId
  >;
  hasProperty!: Sequelize.HasManyHasAssociationMixin<property, propertyId>;
  hasProperties!: Sequelize.HasManyHasAssociationsMixin<property, propertyId>;
  countProperties!: Sequelize.HasManyCountAssociationsMixin;
  // area_metric hasMany unit via area_metric
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

  static initModel(sequelize: Sequelize.Sequelize): typeof area_metric {
    return area_metric.init(
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
        tableName: "area_metric",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "area_metric_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
