const path = require("path");
const ModelUtil = require("../models/ModelUtil");
const Vehicles = require("../models/Vehicles");

const vehicleBooking = async (req, res) => {
  const requestParams = { ...req.params, ...req.body, ...req.query };
  let vehicles = {};

  try {
    const whereClause = {
      first_name: requestParams.first_name,
      last_name: requestParams.last_name,
    };

    if (requestParams.car_type && requestParams.car_model) {
      whereClause.car_type = requestParams.car_type;
      whereClause.car_model = requestParams.car_model;
    }

    if (requestParams.bike_type && requestParams.bike_model) {
      whereClause.bike_type = requestParams.bike_type;
      whereClause.bike_model = requestParams.bike_model;
    }

    if (requestParams.start_date && requestParams.end_date) {
      whereClause.start_date = new Date(requestParams.start_date);
      whereClause.end_date = new Date(requestParams.end_date);
    }

    // Check booking overlapping
    const existingBooking = await ModelUtil.findOne(Vehicles, {
      where: whereClause,
    });

    console.log("existingBooking-------", existingBooking);

    if (existingBooking) {
      // booking overlap
      return res.status(409).json({
        error:
          "Booking already exists for the given vehicle type and model on the specified dates",
      });
    } else {
      // Create a new booking
      vehicles = await ModelUtil.createAndReturn(Vehicles, requestParams);
    }

    if (vehicles) {
      console.log("booking submitted", vehicles);
    }

    res.status(201).json({ message: "Booking successful", booking: vehicles });
  } catch (error) {
    console.log("Error in booking vehicles : ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { vehicleBooking };
