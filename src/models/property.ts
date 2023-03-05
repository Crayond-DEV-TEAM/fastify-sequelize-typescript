import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { address, addressId } from "./address";
import type { area_metric, area_metricId } from "./area_metric";
import type { client, clientId } from "./client";
import type { property_asset, property_assetId } from "./property_asset";
import type { property_type, property_typeId } from "./property_type";
import type { unit, unitId } from "./unit";

export interface propertyAttributes {
  id: string;
  name?: string;
  address_id: string;
  property_no?: string;
  carpet_area?: number;
  total_area?: number;
  business_phone_country_code?: string;
  business_phone?: string;
  mobile_country_code?: string;
  mobile_phone?: string;
  email?: string;
  website?: string;
  company_name?: string;
  land_number?: string;
  area_metric?: number;
  property_purpose?: string;
  swimming_pools?: number;
  elevators?: number;
  revenue_type?: string;
  property_type?: number;
  client: string;
  is_active?: boolean;
  is_private?: boolean;
  created_at?: Date;
  updated_at?: Date;
  description?: object;
  year_built?: Date;
  logo?: string;
  company_id?: number;
  pet_policy?: string;
  is_community?: boolean;
}

export type propertyPk = "id";
export type propertyId = property[propertyPk];
export type propertyOptionalAttributes =
  | "id"
  | "name"
  | "property_no"
  | "carpet_area"
  | "total_area"
  | "business_phone_country_code"
  | "business_phone"
  | "mobile_country_code"
  | "mobile_phone"
  | "email"
  | "website"
  | "company_name"
  | "land_number"
  | "area_metric"
  | "property_purpose"
  | "swimming_pools"
  | "elevators"
  | "revenue_type"
  | "property_type"
  | "is_active"
  | "is_private"
  | "created_at"
  | "updated_at"
  | "description"
  | "year_built"
  | "logo"
  | "company_id"
  | "pet_policy"
  | "is_community";
export type propertyCreationAttributes = Optional<
  propertyAttributes,
  propertyOptionalAttributes
>;

export class property
  extends Model<propertyAttributes, propertyCreationAttributes>
  implements propertyAttributes
{
  id!: string;
  name?: string;
  address_id!: string;
  property_no?: string;
  carpet_area?: number;
  total_area?: number;
  business_phone_country_code?: string;
  business_phone?: string;
  mobile_country_code?: string;
  mobile_phone?: string;
  email?: string;
  website?: string;
  company_name?: string;
  land_number?: string;
  area_metric?: number;
  property_purpose?: string;
  swimming_pools?: number;
  elevators?: number;
  revenue_type?: string;
  property_type?: number;
  client!: string;
  is_active?: boolean;
  is_private?: boolean;
  created_at?: Date;
  updated_at?: Date;
  description?: object;
  year_built?: Date;
  logo?: string;
  company_id?: number;
  pet_policy?: string;
  is_community?: boolean;

  // property belongsTo address via address_id
  address!: address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<address, addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<address>;
  // property belongsTo area_metric via area_metric
  area_metric_area_metric!: area_metric;
  getArea_metric_area_metric!: Sequelize.BelongsToGetAssociationMixin<area_metric>;
  setArea_metric_area_metric!: Sequelize.BelongsToSetAssociationMixin<
    area_metric,
    area_metricId
  >;
  createArea_metric_area_metric!: Sequelize.BelongsToCreateAssociationMixin<area_metric>;
  // property belongsTo client via client
  client_client!: client;
  getClient_client!: Sequelize.BelongsToGetAssociationMixin<client>;
  setClient_client!: Sequelize.BelongsToSetAssociationMixin<client, clientId>;
  createClient_client!: Sequelize.BelongsToCreateAssociationMixin<client>;
  // property hasMany property_asset via property_id
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
  // property hasMany unit via property_id
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
  // property belongsTo property_type via property_type
  property_type_property_type!: property_type;
  getProperty_type_property_type!: Sequelize.BelongsToGetAssociationMixin<property_type>;
  setProperty_type_property_type!: Sequelize.BelongsToSetAssociationMixin<
    property_type,
    property_typeId
  >;
  createProperty_type_property_type!: Sequelize.BelongsToCreateAssociationMixin<property_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof property {
    return property.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        address_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "address",
            key: "id",
          },
        },
        property_no: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        carpet_area: {
          type: DataTypes.REAL,
          allowNull: true,
        },
        total_area: {
          type: DataTypes.REAL,
          allowNull: true,
        },
        business_phone_country_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        business_phone: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mobile_country_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mobile_phone: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        website: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        company_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        land_number: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        area_metric: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "area_metric",
            key: "id",
          },
        },
        property_purpose: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        swimming_pools: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        elevators: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        revenue_type: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        property_type: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "property_type",
            key: "id",
          },
        },
        client: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "client",
            key: "id",
          },
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        is_private: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        description: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        year_built: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        logo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        company_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        pet_policy: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        is_community: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "property",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "property_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
