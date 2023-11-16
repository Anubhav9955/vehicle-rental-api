const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Anubhav@98010",
  database: "vehicle_rental_api",
});

// const sequelize = new Sequelize("vehicle_rental_api", "root", "Anubhav@98010", {
//   dialect: "mysql",
//   host: "localhost",
// });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
