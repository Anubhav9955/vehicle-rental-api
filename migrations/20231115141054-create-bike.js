const { BIKES: tableName } = require("../migrations/tableNameModels");
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

      bike_type: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },

      bike_model: {
        type: Sequelize.STRING(50),
        defaultValue: null,
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
