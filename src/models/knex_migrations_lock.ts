import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface knex_migrations_lockAttributes {
  index: number;
  is_locked?: number;
}

export type knex_migrations_lockPk = "index";
export type knex_migrations_lockId =
  knex_migrations_lock[knex_migrations_lockPk];
export type knex_migrations_lockOptionalAttributes = "index" | "is_locked";
export type knex_migrations_lockCreationAttributes = Optional<
  knex_migrations_lockAttributes,
  knex_migrations_lockOptionalAttributes
>;

export class knex_migrations_lock
  extends Model<
    knex_migrations_lockAttributes,
    knex_migrations_lockCreationAttributes
  >
  implements knex_migrations_lockAttributes
{
  index!: number;
  is_locked?: number;

  static initModel(
    sequelize: Sequelize.Sequelize
  ): typeof knex_migrations_lock {
    return knex_migrations_lock.init(
      {
        index: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        is_locked: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "knex_migrations_lock",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "knex_migrations_lock_pkey",
            unique: true,
            fields: [{ name: "index" }],
          },
        ],
      }
    );
  }
}
