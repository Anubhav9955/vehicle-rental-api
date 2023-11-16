const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { CARS: tableName } = require("../migrations/tableNameModels");

const CARS = sequelize.define(
  "CARS",
  {
    id: {
      type: Sequelize.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    car_type: {
      type: Sequelize.STRING(50),
      defaultValue: null,
    },

    car_model: {
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

module.exports = CARS;
