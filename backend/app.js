const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/nourish_Haven");
const userRoutes = require("./routes/users");

// Express App
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

// CONNECT TO DB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    // LISTEN FOR REQUESTS
    app.listen(process.env.PORT, () => {
      console.log("Listing on port 4000!!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });