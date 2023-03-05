import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { unit, unitId } from "./unit";

export interface unit_vacancyAttributes {
  id: string;
  available_from?: Date;
  available_to?: Date;
  unit_id: string;
  status?: string;
  is_active?: boolean;
}

export type unit_vacancyPk = "id";
export type unit_vacancyId = unit_vacancy[unit_vacancyPk];
export type unit_vacancyOptionalAttributes =
  | "id"
  | "available_from"
  | "available_to"
  | "status"
  | "is_active";
export type unit_vacancyCreationAttributes = Optional<
  unit_vacancyAttributes,
  unit_vacancyOptionalAttributes
>;

export class unit_vacancy
  extends Model<unit_vacancyAttributes, unit_vacancyCreationAttributes>
  implements unit_vacancyAttributes
{
  id!: string;
  available_from?: Date;
  available_to?: Date;
  unit_id!: string;
  status?: string;
  is_active?: boolean;

  // unit_vacancy belongsTo unit via unit_id
  unit!: unit;
  getUnit!: Sequelize.BelongsToGetAssociationMixin<unit>;
  setUnit!: Sequelize.BelongsToSetAssociationMixin<unit, unitId>;
  createUnit!: Sequelize.BelongsToCreateAssociationMixin<unit>;

  static initModel(sequelize: Sequelize.Sequelize): typeof unit_vacancy {
    return unit_vacancy.init(
      {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        available_from: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        available_to: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        unit_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: "unit",
            key: "id",
          },
        },
        status: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        is_active: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: true,
        },
      },
      {
        sequelize,
        tableName: "unit_vacancy",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "unit_vacancy_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
