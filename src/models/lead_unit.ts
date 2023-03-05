import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { lead, leadId } from "./lead";
import type { unit, unitId } from "./unit";

export interface lead_unitAttributes {
  id: string;
  lead_id: string;
  unit_id: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type lead_unitPk = "id";
export type lead_unitId = lead_unit[lead_unitPk];
export type lead_unitOptionalAttributes =
  | "id"
  | "is_active"
  | "created_at"
  | "updated_at";
export type lead_unitCreationAttributes = Optional<
  lead_unitAttributes,
  lead_unitOptionalAttributes
>;

export class lead_unit
  extends Model<lead_unitAttributes, lead_unitCreationAttributes>
  implements lead_unitAttributes
{
  id!: string;
  lead_id!: string;
  unit_id!: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // lead_unit belongsTo lead via lead_id
  lead!: lead;
  getLead!: Sequelize.BelongsToGetAssociationMixin<lead>;
  setLead!: Sequelize.BelongsToSetAssociationMixin<lead, leadId>;
  createLead!: Sequelize.BelongsToCreateAssociationMixin<lead>;
  // lead_unit belongsTo unit via unit_id
  unit!: unit;
  getUnit!: Sequelize.BelongsToGetAssociationMixin<unit>;
  setUnit!: Sequelize.BelongsToSetAssociationMixin<unit, unitId>;
  createUnit!: Sequelize.BelongsToCreateAssociationMixin<unit>;

  static initModel(sequelize: Sequelize.Sequelize): typeof lead_unit {
    return lead_unit.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        lead_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "lead",
            key: "id",
          },
        },
        unit_id: {
          type: DataTypes.UUID,
          allowNull: false,
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
        tableName: "lead_units",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "lead_units_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
