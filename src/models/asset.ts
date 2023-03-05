import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { property_asset, property_assetId } from "./property_asset";
import type { unit_asset, unit_assetId } from "./unit_asset";

export interface assetAttributes {
  id: number;
  type?: string;
  is_active?: boolean;
  accept?: string;
  order?: number;
}

export type assetPk = "id";
export type assetId = asset[assetPk];
export type assetOptionalAttributes = "type" | "is_active" | "accept" | "order";
export type assetCreationAttributes = Optional<
  assetAttributes,
  assetOptionalAttributes
>;

export class asset
  extends Model<assetAttributes, assetCreationAttributes>
  implements assetAttributes
{
  id!: number;
  type?: string;
  is_active?: boolean;
  accept?: string;
  order?: number;

  // asset hasMany property_asset via asset_type
  property_assets!: property_asset[];
  getProperty_assets!: Sequelize.HasManyGetAssociationsMixin<property_asset>;
  setProperty_assets!: Sequelize.HasManySetAssociationsMixin<
    property_asset,
    property_assetId
  >;
  addProperty_asset!: Sequelize.HasManyAddAssociationMixin<
    property_asset,
    property_assetId
  >;
  addProperty_assets!: Sequelize.HasManyAddAssociationsMixin<
    property_asset,
    property_assetId
  >;
  createProperty_asset!: Sequelize.HasManyCreateAssociationMixin<property_asset>;
  removeProperty_asset!: Sequelize.HasManyRemoveAssociationMixin<
    property_asset,
    property_assetId
  >;
  removeProperty_assets!: Sequelize.HasManyRemoveAssociationsMixin<
    property_asset,
    property_assetId
  >;
  hasProperty_asset!: Sequelize.HasManyHasAssociationMixin<
    property_asset,
    property_assetId
  >;
  hasProperty_assets!: Sequelize.HasManyHasAssociationsMixin<
    property_asset,
    property_assetId
  >;
  countProperty_assets!: Sequelize.HasManyCountAssociationsMixin;
  // asset hasMany unit_asset via asset_type
  unit_assets!: unit_asset[];
  getUnit_assets!: Sequelize.HasManyGetAssociationsMixin<unit_asset>;
  setUnit_assets!: Sequelize.HasManySetAssociationsMixin<
    unit_asset,
    unit_assetId
  >;
  addUnit_asset!: Sequelize.HasManyAddAssociationMixin<
    unit_asset,
    unit_assetId
  >;
  addUnit_assets!: Sequelize.HasManyAddAssociationsMixin<
    unit_asset,
    unit_assetId
  >;
  createUnit_asset!: Sequelize.HasManyCreateAssociationMixin<unit_asset>;
  removeUnit_asset!: Sequelize.HasManyRemoveAssociationMixin<
    unit_asset,
    unit_assetId
  >;
  removeUnit_assets!: Sequelize.HasManyRemoveAssociationsMixin<
    unit_asset,
    unit_assetId
  >;
  hasUnit_asset!: Sequelize.HasManyHasAssociationMixin<
    unit_asset,
    unit_assetId
  >;
  hasUnit_assets!: Sequelize.HasManyHasAssociationsMixin<
    unit_asset,
    unit_assetId
  >;
  countUnit_assets!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof asset {
    return asset.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        accept: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        order: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "assets",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "assets_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
