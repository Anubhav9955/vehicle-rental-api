const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { BIKES: tableName } = require("../migrations/tableNameModels");

const BIKES = sequelize.define(
  "BIKES",
  {
    id: {
      type: Sequelize.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    bike_type: {
      type: Sequelize.STRING(50),
      defaultValue: null,
    },

    bike_model: {
      type: Sequelize.STRING(50),
      defaultValue: null,
    },
  },

  {
    tableName,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = BIKES;
