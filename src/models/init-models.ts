import type { Sequelize } from "sequelize";
import { address as _address } from "./address";
import type { addressAttributes, addressCreationAttributes } from "./address";
import { area_metric as _area_metric } from "./area_metric";
import type {
  area_metricAttributes,
  area_metricCreationAttributes,
} from "./area_metric";
import { asset as _asset } from "./asset";
import type { assetAttributes, assetCreationAttributes } from "./asset";
import { client as _client } from "./client";
import type { clientAttributes, clientCreationAttributes } from "./client";
import { event as _event } from "./event";
import type { eventAttributes, eventCreationAttributes } from "./event";
import { knex_migration as _knex_migration } from "./knex_migration";
import type {
  knex_migrationAttributes,
  knex_migrationCreationAttributes,
} from "./knex_migration";
import { knex_migrations_lock as _knex_migrations_lock } from "./knex_migrations_lock";
import type {
  knex_migrations_lockAttributes,
  knex_migrations_lockCreationAttributes,
} from "./knex_migrations_lock";
import { lead as _lead } from "./lead";
import type { leadAttributes, leadCreationAttributes } from "./lead";
import { lead_unit as _lead_unit } from "./lead_unit";
import type {
  lead_unitAttributes,
  lead_unitCreationAttributes,
} from "./lead_unit";
import { property as _property } from "./property";
import type {
  propertyAttributes,
  propertyCreationAttributes,
} from "./property";
import { property_asset as _property_asset } from "./property_asset";
import type {
  property_assetAttributes,
  property_assetCreationAttributes,
} from "./property_asset";
import { property_type as _property_type } from "./property_type";
import type {
  property_typeAttributes,
  property_typeCreationAttributes,
} from "./property_type";
import { shortlisted_unit as _shortlisted_unit } from "./shortlisted_unit";
import type {
  shortlisted_unitAttributes,
  shortlisted_unitCreationAttributes,
} from "./shortlisted_unit";
import { unit as _unit } from "./unit";
import type { unitAttributes, unitCreationAttributes } from "./unit";
import { unit_asset as _unit_asset } from "./unit_asset";
import type {
  unit_assetAttributes,
  unit_assetCreationAttributes,
} from "./unit_asset";
import { unit_category as _unit_category } from "./unit_category";
import type {
  unit_categoryAttributes,
  unit_categoryCreationAttributes,
} from "./unit_category";
import { unit_type as _unit_type } from "./unit_type";
import type {
  unit_typeAttributes,
  unit_typeCreationAttributes,
} from "./unit_type";
import { unit_vacancy as _unit_vacancy } from "./unit_vacancy";
import type {
  unit_vacancyAttributes,
  unit_vacancyCreationAttributes,
} from "./unit_vacancy";
import { user_activity as _user_activity } from "./user_activity";
import type {
  user_activityAttributes,
  user_activityCreationAttributes,
} from "./user_activity";
import { user_profile as _user_profile } from "./user_profile";
import type {
  user_profileAttributes,
  user_profileCreationAttributes,
} from "./user_profile";

export {
  _address as address,
  _area_metric as area_metric,
  _asset as asset,
  _client as client,
  _event as event,
  _knex_migration as knex_migration,
  _knex_migrations_lock as knex_migrations_lock,
  _lead as lead,
  _lead_unit as lead_unit,
  _property as property,
  _property_asset as property_asset,
  _property_type as property_type,
  _shortlisted_unit as shortlisted_unit,
  _unit as unit,
  _unit_asset as unit_asset,
  _unit_category as unit_category,
  _unit_type as unit_type,
  _unit_vacancy as unit_vacancy,
  _user_activity as user_activity,
  _user_profile as user_profile,
};

export type {
  addressAttributes,
  addressCreationAttributes,
  area_metricAttributes,
  area_metricCreationAttributes,
  assetAttributes,
  assetCreationAttributes,
  clientAttributes,
  clientCreationAttributes,
  eventAttributes,
  eventCreationAttributes,
  knex_migrationAttributes,
  knex_migrationCreationAttributes,
  knex_migrations_lockAttributes,
  knex_migrations_lockCreationAttributes,
  leadAttributes,
  leadCreationAttributes,
  lead_unitAttributes,
  lead_unitCreationAttributes,
  propertyAttributes,
  propertyCreationAttributes,
  property_assetAttributes,
  property_assetCreationAttributes,
  property_typeAttributes,
  property_typeCreationAttributes,
  shortlisted_unitAttributes,
  shortlisted_unitCreationAttributes,
  unitAttributes,
  unitCreationAttributes,
  unit_assetAttributes,
  unit_assetCreationAttributes,
  unit_categoryAttributes,
  unit_categoryCreationAttributes,
  unit_typeAttributes,
  unit_typeCreationAttributes,
  unit_vacancyAttributes,
  unit_vacancyCreationAttributes,
  user_activityAttributes,
  user_activityCreationAttributes,
  user_profileAttributes,
  user_profileCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const address = _address.initModel(sequelize);
  const area_metric = _area_metric.initModel(sequelize);
  const asset = _asset.initModel(sequelize);
  const client = _client.initModel(sequelize);
  const event = _event.initModel(sequelize);
  const knex_migration = _knex_migration.initModel(sequelize);
  const knex_migrations_lock = _knex_migrations_lock.initModel(sequelize);
  const lead = _lead.initModel(sequelize);
  const lead_unit = _lead_unit.initModel(sequelize);
  const property = _property.initModel(sequelize);
  const property_asset = _property_asset.initModel(sequelize);
  const property_type = _property_type.initModel(sequelize);
  const shortlisted_unit = _shortlisted_unit.initModel(sequelize);
  const unit = _unit.initModel(sequelize);
  const unit_asset = _unit_asset.initModel(sequelize);
  const unit_category = _unit_category.initModel(sequelize);
  const unit_type = _unit_type.initModel(sequelize);
  const unit_vacancy = _unit_vacancy.initModel(sequelize);
  const user_activity = _user_activity.initModel(sequelize);
  const user_profile = _user_profile.initModel(sequelize);

  property.belongsTo(address, { as: "address", foreignKey: "address_id" });
  address.hasMany(property, { as: "properties", foreignKey: "address_id" });
  unit.belongsTo(address, { as: "address", foreignKey: "address_id" });
  address.hasMany(unit, { as: "units", foreignKey: "address_id" });
  property.belongsTo(area_metric, {
    as: "area_metric_area_metric",
    foreignKey: "area_metric",
  });
  area_metric.hasMany(property, {
    as: "properties",
    foreignKey: "area_metric",
  });
  unit.belongsTo(area_metric, {
    as: "area_metric_area_metric",
    foreignKey: "area_metric",
  });
  area_metric.hasMany(unit, { as: "units", foreignKey: "area_metric" });
  property_asset.belongsTo(asset, {
    as: "asset_type_asset",
    foreignKey: "asset_type",
  });
  asset.hasMany(property_asset, {
    as: "property_assets",
    foreignKey: "asset_type",
  });
  unit_asset.belongsTo(asset, {
    as: "asset_type_asset",
    foreignKey: "asset_type",
  });
  asset.hasMany(unit_asset, { as: "unit_assets", foreignKey: "asset_type" });
  property.belongsTo(client, { as: "client_client", foreignKey: "client" });
  client.hasMany(property, { as: "properties", foreignKey: "client" });
  user_activity.belongsTo(event, { as: "event_event", foreignKey: "event" });
  event.hasMany(user_activity, { as: "user_activities", foreignKey: "event" });
  lead_unit.belongsTo(lead, { as: "lead", foreignKey: "lead_id" });
  lead.hasMany(lead_unit, { as: "lead_units", foreignKey: "lead_id" });
  property_asset.belongsTo(property, {
    as: "property",
    foreignKey: "property_id",
  });
  property.hasMany(property_asset, {
    as: "property_assets",
    foreignKey: "property_id",
  });
  unit.belongsTo(property, { as: "property", foreignKey: "property_id" });
  property.hasMany(unit, { as: "units", foreignKey: "property_id" });
  property.belongsTo(property_type, {
    as: "property_type_property_type",
    foreignKey: "property_type",
  });
  property_type.hasMany(property, {
    as: "properties",
    foreignKey: "property_type",
  });
  lead_unit.belongsTo(unit, { as: "unit", foreignKey: "unit_id" });
  unit.hasMany(lead_unit, { as: "lead_units", foreignKey: "unit_id" });
  shortlisted_unit.belongsTo(unit, { as: "unit", foreignKey: "unit_id" });
  unit.hasMany(shortlisted_unit, {
    as: "shortlisted_units",
    foreignKey: "unit_id",
  });
  unit.belongsTo(unit, { as: "parent_unit", foreignKey: "parent_unit_id" });
  unit.hasMany(unit, { as: "units", foreignKey: "parent_unit_id" });
  unit_asset.belongsTo(unit, { as: "unit", foreignKey: "unit_id" });
  unit.hasMany(unit_asset, { as: "unit_assets", foreignKey: "unit_id" });
  unit_vacancy.belongsTo(unit, { as: "unit", foreignKey: "unit_id" });
  unit.hasMany(unit_vacancy, { as: "unit_vacancies", foreignKey: "unit_id" });
  unit.belongsTo(unit_category, {
    as: "unit_category",
    foreignKey: "unit_category_id",
  });
  unit_category.hasMany(unit, { as: "units", foreignKey: "unit_category_id" });
  unit.belongsTo(unit_type, {
    as: "unit_type_unit_type",
    foreignKey: "unit_type",
  });
  unit_type.hasMany(unit, { as: "units", foreignKey: "unit_type" });
  shortlisted_unit.belongsTo(user_profile, {
    as: "user",
    foreignKey: "user_id",
  });
  user_profile.hasMany(shortlisted_unit, {
    as: "shortlisted_units",
    foreignKey: "user_id",
  });
  user_activity.belongsTo(user_profile, { as: "user", foreignKey: "user_id" });
  user_profile.hasMany(user_activity, {
    as: "user_activities",
    foreignKey: "user_id",
  });

  return {
    address: address,
    area_metric: area_metric,
    asset: asset,
    client: client,
    event: event,
    knex_migration: knex_migration,
    knex_migrations_lock: knex_migrations_lock,
    lead: lead,
    lead_unit: lead_unit,
    property: property,
    property_asset: property_asset,
    property_type: property_type,
    shortlisted_unit: shortlisted_unit,
    unit: unit,
    unit_asset: unit_asset,
    unit_category: unit_category,
    unit_type: unit_type,
    unit_vacancy: unit_vacancy,
    user_activity: user_activity,
    user_profile: user_profile,
  };
}
