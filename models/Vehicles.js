const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const {
  VEHICLES: tableName,
  CARS,
  BIKES,
} = require("../migrations/tableNameModels");

const VEHICLES = sequelize.define(
  "VEHICLES",
  {
    id: {
      type: Sequelize.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    first_name: {
      type: Sequelize.STRING(100),
      defaultValue: null,
    },

    last_name: {
      type: Sequelize.STRING(100),
      defaultValue: null,
    },

    car_model: {
      type: Sequelize.STRING(100),
      defaultValue: null,
    },

    bike_model: {
      type: Sequelize.STRING(100),
      defaultValue: null,
    },

    car_type: {
      type: Sequelize.STRING(100),
      defaultValue: null,
    },

    bike_type: {
      type: Sequelize.STRING(100),
      defaultValue: null,
    },

    start_date: {
      type: Sequelize.DATE,
      defaultValue: null,
    },

    end_date: {
      type: Sequelize.DATE,
      defaultValue: null,
    },

    CarId: {
      type: Sequelize.BIGINT.UNSIGNED,
      references: {
        model: CARS,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },

    BikeId: {
      type: Sequelize.BIGINT.UNSIGNED,
      references: {
        model: BIKES,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },

  {
    tableName,
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

module.exports = VEHICLES;
