import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { address, addressId } from "./address";
import type { area_metric, area_metricId } from "./area_metric";
import type { lead_unit, lead_unitId } from "./lead_unit";
import type { property, propertyId } from "./property";
import type { shortlisted_unit, shortlisted_unitId } from "./shortlisted_unit";
import type { unit_asset, unit_assetId } from "./unit_asset";
import type { unit_category, unit_categoryId } from "./unit_category";
import type { unit_type, unit_typeId } from "./unit_type";
import type { unit_vacancy, unit_vacancyId } from "./unit_vacancy";

export interface unitAttributes {
  id: string;
  name?: string;
  property_id: string;
  block_name?: string;
  floor_name?: string;
  carpet_area?: number;
  total_area?: number;
  total_bed_rooms?: number;
  currency_symbol?: string;
  area_metric?: number;
  parent_unit_id: string;
  unit_purpose?: string;
  furnishing?: string;
  status?: string;
  revenue_type?: string;
  is_pet_allowed?: boolean;
  year_built?: Date;
  description?: object;
  orientation?: string;
  pet_policy?: string;
  total_rooms?: number;
  total_baths?: number;
  planned_hand_over_date?: string;
  address_id: string;
  logo?: string;
  unit_no?: string;
  client: string;
  payment_period?: string;
  balconies?: number;
  balcony_area?: number;
  owner_id?: string;
  build_up_area?: number;
  terrace_area?: number;
  unit_category_id?: number;
  execution_status?: string;
  unit_type?: number;
  is_active?: boolean;
  is_private?: boolean;
  created_at?: Date;
  updated_at?: Date;
  lease_or_sale_value?: number;
}

export type unitPk = "id";
export type unitId = unit[unitPk];
export type unitOptionalAttributes =
  | "id"
  | "name"
  | "block_name"
  | "floor_name"
  | "carpet_area"
  | "total_area"
  | "total_bed_rooms"
  | "currency_symbol"
  | "area_metric"
  | "unit_purpose"
  | "furnishing"
  | "status"
  | "revenue_type"
  | "is_pet_allowed"
  | "year_built"
  | "description"
  | "orientation"
  | "pet_policy"
  | "total_rooms"
  | "total_baths"
  | "planned_hand_over_date"
  | "logo"
  | "unit_no"
  | "payment_period"
  | "balconies"
  | "balcony_area"
  | "owner_id"
  | "build_up_area"
  | "terrace_area"
  | "unit_category_id"
  | "execution_status"
  | "unit_type"
  | "is_active"
  | "is_private"
  | "created_at"
  | "updated_at"
  | "lease_or_sale_value";
export type unitCreationAttributes = Optional<
  unitAttributes,
  unitOptionalAttributes
>;

export class unit
  extends Model<unitAttributes, unitCreationAttributes>
  implements unitAttributes
{
  id!: string;
  name?: string;
  property_id!: string;
  block_name?: string;
  floor_name?: string;
  carpet_area?: number;
  total_area?: number;
  total_bed_rooms?: number;
  currency_symbol?: string;
  area_metric?: number;
  parent_unit_id!: string;
  unit_purpose?: string;
  furnishing?: string;
  status?: string;
  revenue_type?: string;
  is_pet_allowed?: boolean;
  year_built?: Date;
  description?: object;
  orientation?: string;
  pet_policy?: string;
  total_rooms?: number;
  total_baths?: number;
  planned_hand_over_date?: string;
  address_id!: string;
  logo?: string;
  unit_no?: string;
  client!: string;
  payment_period?: string;
  balconies?: number;
  balcony_area?: number;
  owner_id?: string;
  build_up_area?: number;
  terrace_area?: number;
  unit_category_id?: number;
  execution_status?: string;
  unit_type?: number;
  is_active?: boolean;
  is_private?: boolean;
  created_at?: Date;
  updated_at?: Date;
  lease_or_sale_value?: number;

  // unit belongsTo address via address_id
  address!: address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<address, addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<address>;
  // unit belongsTo area_metric via area_metric
  area_metric_area_metric!: area_metric;
  getArea_metric_area_metric!: Sequelize.BelongsToGetAssociationMixin<area_metric>;
  setArea_metric_area_metric!: Sequelize.BelongsToSetAssociationMixin<
    area_metric,
    area_metricId
  >;
  createArea_metric_area_metric!: Sequelize.BelongsToCreateAssociationMixin<area_metric>;
  // unit belongsTo property via property_id
  property!: property;
  getProperty!: Sequelize.BelongsToGetAssociationMixin<property>;
  setProperty!: Sequelize.BelongsToSetAssociationMixin<property, propertyId>;
  createProperty!: Sequelize.BelongsToCreateAssociationMixin<property>;
  // unit hasMany lead_unit via unit_id
  lead_units!: lead_unit[];
  getLead_units!: Sequelize.HasManyGetAssociationsMixin<lead_unit>;
  setLead_units!: Sequelize.HasManySetAssociationsMixin<lead_unit, lead_unitId>;
  addLead_unit!: Sequelize.HasManyAddAssociationMixin<lead_unit, lead_unitId>;
  addLead_units!: Sequelize.HasManyAddAssociationsMixin<lead_unit, lead_unitId>;
  createLead_unit!: Sequelize.HasManyCreateAssociationMixin<lead_unit>;
  removeLead_unit!: Sequelize.HasManyRemoveAssociationMixin<
    lead_unit,
    lead_unitId
  >;
  removeLead_units!: Sequelize.HasManyRemoveAssociationsMixin<
    lead_unit,
    lead_unitId
  >;
  hasLead_unit!: Sequelize.HasManyHasAssociationMixin<lead_unit, lead_unitId>;
  hasLead_units!: Sequelize.HasManyHasAssociationsMixin<lead_unit, lead_unitId>;
  countLead_units!: Sequelize.HasManyCountAssociationsMixin;
  // unit hasMany shortlisted_unit via unit_id
  shortlisted_units!: shortlisted_unit[];
  getShortlisted_units!: Sequelize.HasManyGetAssociationsMixin<shortlisted_unit>;
  setShortlisted_units!: Sequelize.HasManySetAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  addShortlisted_unit!: Sequelize.HasManyAddAssociationMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  addShortlisted_units!: Sequelize.HasManyAddAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  createShortlisted_unit!: Sequelize.HasManyCreateAssociationMixin<shortlisted_unit>;
  removeShortlisted_unit!: Sequelize.HasManyRemoveAssociationMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  removeShortlisted_units!: Sequelize.HasManyRemoveAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  hasShortlisted_unit!: Sequelize.HasManyHasAssociationMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  hasShortlisted_units!: Sequelize.HasManyHasAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  countShortlisted_units!: Sequelize.HasManyCountAssociationsMixin;
  // unit belongsTo unit via parent_unit_id
  parent_unit!: unit;
  getParent_unit!: Sequelize.BelongsToGetAssociationMixin<unit>;
  setParent_unit!: Sequelize.BelongsToSetAssociationMixin<unit, unitId>;
  createParent_unit!: Sequelize.BelongsToCreateAssociationMixin<unit>;
  // unit hasMany unit_asset via unit_id
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
  // unit hasMany unit_vacancy via unit_id
  unit_vacancies!: unit_vacancy[];
  getUnit_vacancies!: Sequelize.HasManyGetAssociationsMixin<unit_vacancy>;
  setUnit_vacancies!: Sequelize.HasManySetAssociationsMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  addUnit_vacancy!: Sequelize.HasManyAddAssociationMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  addUnit_vacancies!: Sequelize.HasManyAddAssociationsMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  createUnit_vacancy!: Sequelize.HasManyCreateAssociationMixin<unit_vacancy>;
  removeUnit_vacancy!: Sequelize.HasManyRemoveAssociationMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  removeUnit_vacancies!: Sequelize.HasManyRemoveAssociationsMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  hasUnit_vacancy!: Sequelize.HasManyHasAssociationMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  hasUnit_vacancies!: Sequelize.HasManyHasAssociationsMixin<
    unit_vacancy,
    unit_vacancyId
  >;
  countUnit_vacancies!: Sequelize.HasManyCountAssociationsMixin;
  // unit belongsTo unit_category via unit_category_id
  unit_category!: unit_category;
  getUnit_category!: Sequelize.BelongsToGetAssociationMixin<unit_category>;
  setUnit_category!: Sequelize.BelongsToSetAssociationMixin<
    unit_category,
    unit_categoryId
  >;
  createUnit_category!: Sequelize.BelongsToCreateAssociationMixin<unit_category>;
  // unit belongsTo unit_type via unit_type
  unit_type_unit_type!: unit_type;
  getUnit_type_unit_type!: Sequelize.BelongsToGetAssociationMixin<unit_type>;
  setUnit_type_unit_type!: Sequelize.BelongsToSetAssociationMixin<
    unit_type,
    unit_typeId
  >;
  createUnit_type_unit_type!: Sequelize.BelongsToCreateAssociationMixin<unit_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof unit {
    return unit.init(
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
        property_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "property",
            key: "id",
          },
        },
        block_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        floor_name: {
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
        total_bed_rooms: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        currency_symbol: {
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
        parent_unit_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "unit",
            key: "id",
          },
        },
        unit_purpose: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        furnishing: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        status: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        revenue_type: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        is_pet_allowed: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        year_built: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        description: {
          type: DataTypes.JSONB,
          allowNull: true,
        },
        orientation: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        pet_policy: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        total_rooms: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        total_baths: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        planned_hand_over_date: {
          type: DataTypes.DATEONLY,
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
        logo: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        unit_no: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        client: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        payment_period: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        balconies: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        balcony_area: {
          type: DataTypes.REAL,
          allowNull: true,
        },
        owner_id: {
          type: DataTypes.UUID,
          allowNull: true,
        },
        build_up_area: {
          type: DataTypes.REAL,
          allowNull: true,
        },
        terrace_area: {
          type: DataTypes.REAL,
          allowNull: true,
        },
        unit_category_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "unit_category",
            key: "id",
          },
        },
        execution_status: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        unit_type: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "unit_type",
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
        lease_or_sale_value: {
          type: DataTypes.REAL,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "unit",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "unit_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
