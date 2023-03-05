import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { property, propertyId } from "./property";

export interface property_typeAttributes {
  id: number;
  type?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type property_typePk = "id";
export type property_typeId = property_type[property_typePk];
export type property_typeOptionalAttributes =
  | "id"
  | "type"
  | "is_active"
  | "created_at"
  | "updated_at";
export type property_typeCreationAttributes = Optional<
  property_typeAttributes,
  property_typeOptionalAttributes
>;

export class property_type
  extends Model<property_typeAttributes, property_typeCreationAttributes>
  implements property_typeAttributes
{
  id!: number;
  type?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // property_type hasMany property via property_type
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

  static initModel(sequelize: Sequelize.Sequelize): typeof property_type {
    return property_type.init(
      {
        id: {
          autoIncrement: true,
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
      },
      {
        sequelize,
        tableName: "property_type",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "property_type_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
