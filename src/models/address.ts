import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { property, propertyId } from "./property";
import type { unit, unitId } from "./unit";

export interface addressAttributes {
  id: string;
  name?: string;
  door_no?: string;
  landmark?: string;
  street_1?: string;
  street_2?: string;
  street_3?: string;
  city?: string;
  district?: string;
  state?: string;
  zipcode?: string;
  po_box?: string;
  country?: string;
  phone?: string;
  extension?: string;
  fax_no?: string;
  mobile_no_country_code?: string;
  mobile_no?: string;
  alternative_mobile_no_country_code?: string;
  alternative_mobile_no?: string;
  email_id?: string;
  alternative_email_id?: string;
  latitude?: string;
  longitude?: string;
  area?: string;
  geom?: any;
  client: string;
}

export type addressPk = "id";
export type addressId = address[addressPk];
export type addressOptionalAttributes =
  | "id"
  | "name"
  | "door_no"
  | "landmark"
  | "street_1"
  | "street_2"
  | "street_3"
  | "city"
  | "district"
  | "state"
  | "zipcode"
  | "po_box"
  | "country"
  | "phone"
  | "extension"
  | "fax_no"
  | "mobile_no_country_code"
  | "mobile_no"
  | "alternative_mobile_no_country_code"
  | "alternative_mobile_no"
  | "email_id"
  | "alternative_email_id"
  | "latitude"
  | "longitude"
  | "area"
  | "geom";
export type addressCreationAttributes = Optional<
  addressAttributes,
  addressOptionalAttributes
>;

export class address
  extends Model<addressAttributes, addressCreationAttributes>
  implements addressAttributes
{
  id!: string;
  name?: string;
  door_no?: string;
  landmark?: string;
  street_1?: string;
  street_2?: string;
  street_3?: string;
  city?: string;
  district?: string;
  state?: string;
  zipcode?: string;
  po_box?: string;
  country?: string;
  phone?: string;
  extension?: string;
  fax_no?: string;
  mobile_no_country_code?: string;
  mobile_no?: string;
  alternative_mobile_no_country_code?: string;
  alternative_mobile_no?: string;
  email_id?: string;
  alternative_email_id?: string;
  latitude?: string;
  longitude?: string;
  area?: string;
  geom?: any;
  client!: string;

  // address hasMany property via address_id
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
  // address hasMany unit via address_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof address {
    return address.init(
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
        door_no: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        landmark: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        street_1: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        street_2: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        street_3: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        city: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        district: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        state: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        zipcode: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        po_box: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        country: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        phone: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        extension: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        fax_no: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        mobile_no_country_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mobile_no: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        alternative_mobile_no_country_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        alternative_mobile_no: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        email_id: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        alternative_email_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        latitude: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        longitude: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        area: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        geom: {
          type: DataTypes.GEOMETRY("GEOMETRY", 0),
          allowNull: true,
        },
        client: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "address",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "address_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
