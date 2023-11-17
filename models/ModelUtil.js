const Sequelize = require("sequelize");
const path = require("path");

const createAndReturn = async (model, data) => {
  try {
    const returnedData = await model.create(data);

    return returnedData && returnedData.dataValues
      ? returnedData.get({ plain: true })
      : null;
  } catch (error) {
    console.error("Error in createAndReturn:", error);
    throw error;
  }
};

const findOne = async (model, modelParams) => {
  try {
    const returnedData = await model.findOne(modelParams);

    return returnedData && returnedData.dataValues
      ? returnedData.get({ plain: true })
      : null;
  } catch (error) {
    console.error("Error in findOne:", error);
    throw error;
  }
};

module.exports = {
  createAndReturn,
  findOne,
};

const findAll = async (model, modelParams) => {
  const returnedData = await model.findAll(modelParams);

  if (returnedData && returnedData.length > 0) {
    return returnedData.map((data) =>
      data.get ? data.get({ plain: true }) : data
    );
  }

  return [];
};

module.exports = {
  createAndReturn,
  findOne,
  findAll,
};
