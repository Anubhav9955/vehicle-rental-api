module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Cars", [
      {
        car_type: "Hatchback",
        car_model: "Swift",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        car_type: "SUV",
        car_model: "Brezza",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        car_type: "Sedan",
        car_model: "Verna",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("Bikes", [
      {
        bike_type: "Cruiser",
        bike_model: "Royal Enfield",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        bike_type: "Sports",
        bike_model: "Yamaha",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    const cars = await queryInterface.sequelize.query("SELECT id from Cars;");
    const carIds = cars[0].map((car) => car.id);

    const bikes = await queryInterface.sequelize.query("SELECT id from Bikes;");
    const bikeIds = bikes[0].map((bike) => bike.id);

    await queryInterface.bulkInsert("Vehicles", [
      {
        first_name: "John",
        last_name: "Doe",
        car_model: "Swift",
        car_type: "Hatchback",
        start_date: "2023-11-15",
        end_date: "2023-11-20",
        CarId: carIds[0],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Jane",
        last_name: "Doe",
        car_model: "Brezza",
        car_type: "SUV",
        start_date: "2023-11-15",
        end_date: "2023-11-20",
        CarId: carIds[1],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Bob",
        last_name: "Smith",
        car_model: "Verna",
        car_type: "Sedan",
        start_date: "2023-11-15",
        end_date: "2023-11-20",
        CarId: carIds[2],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Alice",
        last_name: "Johnson",
        bike_model: "Royal Enfield",
        bike_type: "Cruiser",
        start_date: new Date(),
        end_date: new Date(),
        BikeId: bikeIds[0],
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "David",
        last_name: "Malan",
        bike_model: "Yamaha",
        bike_type: "Sports",
        start_date: new Date(),
        end_date: new Date(),
        BikeId: bikeIds[1],
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Cars", null, {});
    await queryInterface.bulkDelete("Bikes", null, {});
    await queryInterface.bulkDelete("Vehicles", null, {});
  },
};
