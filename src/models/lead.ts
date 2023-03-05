import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { lead_unit, lead_unitId } from "./lead_unit";

export interface leadAttributes {
  id: string;
  name?: string;
  email?: string;
  mobile_no?: string;
  mobile_no_country_code?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type leadPk = "id";
export type leadId = lead[leadPk];
export type leadOptionalAttributes =
  | "id"
  | "name"
  | "email"
  | "mobile_no"
  | "mobile_no_country_code"
  | "is_active"
  | "created_at"
  | "updated_at";
export type leadCreationAttributes = Optional<
  leadAttributes,
  leadOptionalAttributes
>;

export class lead
  extends Model<leadAttributes, leadCreationAttributes>
  implements leadAttributes
{
  id!: string;
  name?: string;
  email?: string;
  mobile_no?: string;
  mobile_no_country_code?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // lead hasMany lead_unit via lead_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof lead {
    return lead.init(
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
        email: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mobile_no: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mobile_no_country_code: {
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
        tableName: "lead",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "lead_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
