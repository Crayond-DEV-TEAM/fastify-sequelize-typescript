import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";

export interface knex_migrationAttributes {
  id: number;
  name?: string;
  batch?: number;
  migration_time?: Date;
}

export type knex_migrationPk = "id";
export type knex_migrationId = knex_migration[knex_migrationPk];
export type knex_migrationOptionalAttributes =
  | "id"
  | "name"
  | "batch"
  | "migration_time";
export type knex_migrationCreationAttributes = Optional<
  knex_migrationAttributes,
  knex_migrationOptionalAttributes
>;

export class knex_migration
  extends Model<knex_migrationAttributes, knex_migrationCreationAttributes>
  implements knex_migrationAttributes
{
  id!: number;
  name?: string;
  batch?: number;
  migration_time?: Date;

  static initModel(sequelize: Sequelize.Sequelize): typeof knex_migration {
    return knex_migration.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        batch: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        migration_time: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "knex_migrations",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "knex_migrations_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
