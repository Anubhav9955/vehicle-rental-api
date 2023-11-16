const path = require("path");
const ModelUtil = require("../models/ModelUtil");
const Bikes = require("../models/Bikes");
const Cars = require("../models/Cars");

const carsTypeList = async (req, res) => {
  const requestParams = { ...req.params, ...req.body, ...req.query };
  console.log("carsTypeList", requestParams);
  try {
    const carTypes = await ModelUtil.findAll(Cars, {
      attributes: ["car_type"],
      raw: true,
    });
    console.log("carTypes-----", carTypes);
    res.json(carTypes);
  } catch (error) {
    console.error("Error listing car types:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const carsModelsList = async (req, res) => {
  const requestParams = { ...req.params, ...req.body, ...req.query };
  console.log("carsModelsList", requestParams);
  try {
    const carModels = await ModelUtil.findAll(Cars, {
      attributes: ["car_model"],
      raw: true,
    });
    res.json(carModels);
  } catch (error) {
    console.error("Error listing car models:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const bikesTypeList = async (req, res) => {
  const requestParams = { ...req.params, ...req.body, ...req.query };
  console.log("bikesTypeList", requestParams);
  try {
    const bikeTypes = await ModelUtil.findAll(Bikes, {
      attributes: ["bike_type"],
      raw: true,
    });
    res.json(bikeTypes);
  } catch (error) {
    console.error("Error listing bike types:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const bikesModelsList = async (req, res) => {
  const requestParams = { ...req.params, ...req.body, ...req.query };
  console.log("carsTypeList", requestParams);
  try {
    const bikeModels = await ModelUtil.findAll(Bikes, {
      attributes: ["bike_model"],
      raw: true,
    });
    res.json(bikeModels);
  } catch (error) {
    console.error("Error listing bike models:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  carsTypeList,
  carsModelsList,
  bikesTypeList,
  bikesModelsList,
};
