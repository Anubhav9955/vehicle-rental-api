const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { validationResult, check } = require("express-validator");
const db = require("./util/database");

const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());

// Generic error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Request validation middleware
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// booking routes
app.use("/api", apiRoutes);

// root route
app.get("/", (req, res) => {
  const data = { message: "Hello, this is the vehicle rental API!" };
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
