import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { asset, assetId } from "./asset";
import type { property, propertyId } from "./property";

export interface property_assetAttributes {
  id: string;
  property_id: string;
  url?: string;
  priority?: number;
  file_meta?: object;
  asset_type?: number;
}

export type property_assetPk = "id";
export type property_assetId = property_asset[property_assetPk];
export type property_assetOptionalAttributes =
  | "id"
  | "url"
  | "priority"
  | "file_meta"
  | "asset_type";
export type property_assetCreationAttributes = Optional<
  property_assetAttributes,
  property_assetOptionalAttributes
>;

export class property_asset
  extends Model<property_assetAttributes, property_assetCreationAttributes>
  implements property_assetAttributes
{
  id!: string;
  property_id!: string;
  url?: string;
  priority?: number;
  file_meta?: object;
  asset_type?: number;

  // property_asset belongsTo asset via asset_type
  asset_type_asset!: asset;
  getAsset_type_asset!: Sequelize.BelongsToGetAssociationMixin<asset>;
  setAsset_type_asset!: Sequelize.BelongsToSetAssociationMixin<asset, assetId>;
  createAsset_type_asset!: Sequelize.BelongsToCreateAssociationMixin<asset>;
  // property_asset belongsTo property via property_id
  property!: property;
  getProperty!: Sequelize.BelongsToGetAssociationMixin<property>;
  setProperty!: Sequelize.BelongsToSetAssociationMixin<property, propertyId>;
  createProperty!: Sequelize.BelongsToCreateAssociationMixin<property>;

  static initModel(sequelize: Sequelize.Sequelize): typeof property_asset {
    return property_asset.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        property_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "property",
            key: "id",
          },
        },
        url: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        priority: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        file_meta: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        asset_type: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "assets",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "property_assets",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "property_assets_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
