const express = require("express");

const router = express.Router();

const vehicleListingController = require("../controllers/vehicleListingController");
const vehicleBookingController = require("../controllers/vehicleBookingController");

router.get("/car-types", vehicleListingController.carsTypeList);
router.get("/car-models", vehicleListingController.carsModelsList);
router.get("/bike-types", vehicleListingController.bikesTypeList);
router.get("/bike-models", vehicleListingController.bikesModelsList);
router.post("/vehicle-booking-submit", vehicleBookingController.vehicleBooking);

module.exports = router;
