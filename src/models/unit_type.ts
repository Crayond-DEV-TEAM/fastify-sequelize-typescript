import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { unit, unitId } from "./unit";

export interface unit_typeAttributes {
  id: number;
  type?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type unit_typePk = "id";
export type unit_typeId = unit_type[unit_typePk];
export type unit_typeOptionalAttributes =
  | "id"
  | "type"
  | "is_active"
  | "created_at"
  | "updated_at";
export type unit_typeCreationAttributes = Optional<
  unit_typeAttributes,
  unit_typeOptionalAttributes
>;

export class unit_type
  extends Model<unit_typeAttributes, unit_typeCreationAttributes>
  implements unit_typeAttributes
{
  id!: number;
  type?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // unit_type hasMany unit via unit_type
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

  static initModel(sequelize: Sequelize.Sequelize): typeof unit_type {
    return unit_type.init(
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
        tableName: "unit_type",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "unit_type_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
