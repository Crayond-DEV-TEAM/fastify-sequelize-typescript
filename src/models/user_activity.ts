import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { event, eventId } from "./event";
import type { user_profile, user_profileId } from "./user_profile";

export interface user_activityAttributes {
  id: string;
  user_id?: string;
  event?: number;
  created_at?: Date;
  updated_at?: Date;
  identifier: string;
}

export type user_activityPk = "id";
export type user_activityId = user_activity[user_activityPk];
export type user_activityOptionalAttributes =
  | "id"
  | "user_id"
  | "event"
  | "created_at"
  | "updated_at";
export type user_activityCreationAttributes = Optional<
  user_activityAttributes,
  user_activityOptionalAttributes
>;

export class user_activity
  extends Model<user_activityAttributes, user_activityCreationAttributes>
  implements user_activityAttributes
{
  id!: string;
  user_id?: string;
  event?: number;
  created_at?: Date;
  updated_at?: Date;
  identifier!: string;

  // user_activity belongsTo event via event
  event_event!: event;
  getEvent_event!: Sequelize.BelongsToGetAssociationMixin<event>;
  setEvent_event!: Sequelize.BelongsToSetAssociationMixin<event, eventId>;
  createEvent_event!: Sequelize.BelongsToCreateAssociationMixin<event>;
  // user_activity belongsTo user_profile via user_id
  user!: user_profile;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user_profile>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<
    user_profile,
    user_profileId
  >;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user_profile>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_activity {
    return user_activity.init(
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
        event: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "event",
            key: "id",
          },
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
        identifier: {
          type: DataTypes.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "user_activities",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_activities_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
