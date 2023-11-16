const express = require("express");

const router = express.Router();

const vehicleListingController = require("../controllers/vehicleListingController");
const vehicleBookingController = require("../controllers/vehicleBookingController");

router.get("/car-types", vehicleListingController.carsTypeList);
router.get("/car-models", vehicleListingController.carsModelsList);
router.get("/bike-types", vehicleListingController.bikesTypeList);
router.get("/bike-models", vehicleListingController.bikesModelsList);

// POST /api/vehicle-booking-submit
router.post(
  "/vehicle-booking-submit",
  vehicleBookingController.vehicleBookingValidationRules,
  vehicleBookingController.validateRequest,
  vehicleBookingController.vehicleBooking
);
module.exports = router;
