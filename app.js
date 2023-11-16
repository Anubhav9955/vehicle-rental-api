const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
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

// Use the booking routes
app.use("/api", apiRoutes);
// Placeholder for the root route
app.get("/", (req, res) => {
  const data = { message: "Hello, this is vehicle rental API!" };
  res.json(data);
});

app.listen(PORT);
