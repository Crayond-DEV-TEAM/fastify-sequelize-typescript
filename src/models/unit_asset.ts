import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { asset, assetId } from "./asset";
import type { unit, unitId } from "./unit";

export interface unit_assetAttributes {
  id: string;
  unit_id: string;
  url?: string;
  priority?: number;
  file_meta?: object;
  asset_type?: number;
}

export type unit_assetPk = "id";
export type unit_assetId = unit_asset[unit_assetPk];
export type unit_assetOptionalAttributes =
  | "id"
  | "url"
  | "priority"
  | "file_meta"
  | "asset_type";
export type unit_assetCreationAttributes = Optional<
  unit_assetAttributes,
  unit_assetOptionalAttributes
>;

export class unit_asset
  extends Model<unit_assetAttributes, unit_assetCreationAttributes>
  implements unit_assetAttributes
{
  id!: string;
  unit_id!: string;
  url?: string;
  priority?: number;
  file_meta?: object;
  asset_type?: number;

  // unit_asset belongsTo asset via asset_type
  asset_type_asset!: asset;
  getAsset_type_asset!: Sequelize.BelongsToGetAssociationMixin<asset>;
  setAsset_type_asset!: Sequelize.BelongsToSetAssociationMixin<asset, assetId>;
  createAsset_type_asset!: Sequelize.BelongsToCreateAssociationMixin<asset>;
  // unit_asset belongsTo unit via unit_id
  unit!: unit;
  getUnit!: Sequelize.BelongsToGetAssociationMixin<unit>;
  setUnit!: Sequelize.BelongsToSetAssociationMixin<unit, unitId>;
  createUnit!: Sequelize.BelongsToCreateAssociationMixin<unit>;

  static initModel(sequelize: Sequelize.Sequelize): typeof unit_asset {
    return unit_asset.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        unit_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "unit",
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
        tableName: "unit_assets",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "unit_assets_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
