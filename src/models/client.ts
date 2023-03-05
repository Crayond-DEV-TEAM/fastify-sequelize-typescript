import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { property, propertyId } from "./property";

export interface clientAttributes {
  id: string;
  client_logo?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type clientPk = "id";
export type clientId = client[clientPk];
export type clientOptionalAttributes =
  | "client_logo"
  | "is_active"
  | "created_at"
  | "updated_at";
export type clientCreationAttributes = Optional<
  clientAttributes,
  clientOptionalAttributes
>;

export class client
  extends Model<clientAttributes, clientCreationAttributes>
  implements clientAttributes
{
  id!: string;
  client_logo?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // client hasMany property via client
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

  static initModel(sequelize: Sequelize.Sequelize): typeof client {
    return client.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        client_logo: {
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
        tableName: "client",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "client_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
