import * as Sequelize from "sequelize";
import { DataTypes, Model, Optional } from "sequelize";
import type { shortlisted_unit, shortlisted_unitId } from "./shortlisted_unit";
import type { user_activity, user_activityId } from "./user_activity";

export interface user_profileAttributes {
  id: string;
  name?: string;
  email?: string;
  mobile_no_country_code?: string;
  mobile_no?: string;
  sub_id?: string;
}

export type user_profilePk = "id";
export type user_profileId = user_profile[user_profilePk];
export type user_profileOptionalAttributes =
  | "id"
  | "name"
  | "email"
  | "mobile_no_country_code"
  | "mobile_no"
  | "sub_id";
export type user_profileCreationAttributes = Optional<
  user_profileAttributes,
  user_profileOptionalAttributes
>;

export class user_profile
  extends Model<user_profileAttributes, user_profileCreationAttributes>
  implements user_profileAttributes
{
  id!: string;
  name?: string;
  email?: string;
  mobile_no_country_code?: string;
  mobile_no?: string;
  sub_id?: string;

  // user_profile hasMany shortlisted_unit via user_id
  shortlisted_units!: shortlisted_unit[];
  getShortlisted_units!: Sequelize.HasManyGetAssociationsMixin<shortlisted_unit>;
  setShortlisted_units!: Sequelize.HasManySetAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  addShortlisted_unit!: Sequelize.HasManyAddAssociationMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  addShortlisted_units!: Sequelize.HasManyAddAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  createShortlisted_unit!: Sequelize.HasManyCreateAssociationMixin<shortlisted_unit>;
  removeShortlisted_unit!: Sequelize.HasManyRemoveAssociationMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  removeShortlisted_units!: Sequelize.HasManyRemoveAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  hasShortlisted_unit!: Sequelize.HasManyHasAssociationMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  hasShortlisted_units!: Sequelize.HasManyHasAssociationsMixin<
    shortlisted_unit,
    shortlisted_unitId
  >;
  countShortlisted_units!: Sequelize.HasManyCountAssociationsMixin;
  // user_profile hasMany user_activity via user_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof user_profile {
    return user_profile.init(
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
        mobile_no_country_code: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        mobile_no: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        sub_id: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: "user_profiles",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "user_profiles_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
