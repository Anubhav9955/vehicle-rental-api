const up = async (queryInterface) => {
  await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
  await queryInterface.sequelize.query(
    "ALTER DATABASE vehicle_rental_api CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci"
  );
};

const down = async (queryInterface) => {
  await queryInterface.sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
};

module.exports = {
  up,
  down,
};
