const { VEHICLES: tableName, CARS, BIKES } = require("./tableNameModels");
const {
  up: upEntryQuery,
  down: downEntryQuery,
} = require("./genericMigrationQueries");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await upEntryQuery(queryInterface);

    // table structure
    await queryInterface.createTable(tableName, {
      // columns
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

      created_at: {
        type: "TIMESTAMP",
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: "TIMESTAMP",
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    return upEntryQuery(queryInterface);
  },

  down: async (queryInterface) => {
    await downEntryQuery(queryInterface);

    // Revert changes, drop table
    await queryInterface.dropTable(tableName);

    return downEntryQuery(queryInterface);
  },
};
