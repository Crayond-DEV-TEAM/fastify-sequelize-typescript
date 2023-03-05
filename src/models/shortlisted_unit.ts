import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { unit, unitId } from "./unit";
import type { user_profile, user_profileId } from "./user_profile";

export interface shortlisted_unitAttributes {
  id: string;
  user_id?: string;
  unit_id?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type shortlisted_unitPk = "id";
export type shortlisted_unitId = shortlisted_unit[shortlisted_unitPk];
export type shortlisted_unitOptionalAttributes =
  | "id"
  | "user_id"
  | "unit_id"
  | "is_active"
  | "created_at"
  | "updated_at";
export type shortlisted_unitCreationAttributes = Optional<
  shortlisted_unitAttributes,
  shortlisted_unitOptionalAttributes
>;

export class shortlisted_unit
  extends Model<shortlisted_unitAttributes, shortlisted_unitCreationAttributes>
  implements shortlisted_unitAttributes
{
  id!: string;
  user_id?: string;
  unit_id?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // shortlisted_unit belongsTo unit via unit_id
  unit!: unit;
  getUnit!: Sequelize.BelongsToGetAssociationMixin<unit>;
  setUnit!: Sequelize.BelongsToSetAssociationMixin<unit, unitId>;
  createUnit!: Sequelize.BelongsToCreateAssociationMixin<unit>;
  // shortlisted_unit belongsTo user_profile via user_id
  user!: user_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof shortlisted_unit {
    return shortlisted_unit.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "user_profiles",
            key: "id",
          },
        },
        unit_id: {
          type: DataTypes.UUID,
          allowNull: true,
          references: {
            model: "unit",
            key: "id",
          },
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
        tableName: "shortlisted_units",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "shortlisted_units_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
