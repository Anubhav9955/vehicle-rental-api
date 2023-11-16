const Sequelize = require("sequelize");
const path = require("path");

const createAndReturn = (model, data, transaction) => {
  const modelOptions = {};
  if (transaction) {
    modelOptions.transaction = transaction;
  }

  return model.create(data, modelOptions).then((returnedData) => {
    if (returnedData && returnedData.dataValues) {
      return returnedData.get({ plain: true });
    }

    return null;
  });
};

const findOne = (model, modelParams) => {
  return model.findOne(modelParams).then((returnedData) => {
    if (returnedData && returnedData.dataValues) {
      return returnedData.get({ plain: true });
    }

    return null;
  });
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
