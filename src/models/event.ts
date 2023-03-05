import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { user_activity, user_activityId } from "./user_activity";

export interface eventAttributes {
  id: number;
  name?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export type eventPk = "id";
export type eventId = event[eventPk];
export type eventOptionalAttributes =
  | "id"
  | "name"
  | "is_active"
  | "created_at"
  | "updated_at";
export type eventCreationAttributes = Optional<
  eventAttributes,
  eventOptionalAttributes
>;

export class event
  extends Model<eventAttributes, eventCreationAttributes>
  implements eventAttributes
{
  id!: number;
  name?: string;
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  // event hasMany user_activity via event
  user_activities!: user_activity[];
  getUser_activities!: Sequelize.HasManyGetAssociationsMixin<user_activity>;
  setUser_activities!: Sequelize.HasManySetAssociationsMixin<
    user_activity,
    user_activityId
  >;
  addUser_activity!: Sequelize.HasManyAddAssociationMixin<
    user_activity,
    user_activityId
  >;
  addUser_activities!: Sequelize.HasManyAddAssociationsMixin<
    user_activity,
    user_activityId
  >;
  createUser_activity!: Sequelize.HasManyCreateAssociationMixin<user_activity>;
  removeUser_activity!: Sequelize.HasManyRemoveAssociationMixin<
    user_activity,
    user_activityId
  >;
  removeUser_activities!: Sequelize.HasManyRemoveAssociationsMixin<
    user_activity,
    user_activityId
  >;
  hasUser_activity!: Sequelize.HasManyHasAssociationMixin<
    user_activity,
    user_activityId
  >;
  hasUser_activities!: Sequelize.HasManyHasAssociationsMixin<
    user_activity,
    user_activityId
  >;
  countUser_activities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof event {
    return event.init(
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
        tableName: "event",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "event_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
