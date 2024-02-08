const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
// require("dotenv").config();

const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");

// Express App
const app = express();

// Middleware
app.use(bodyParser.json()) //application/json
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
  .connect('mongodb+srv://Nourish-Haven:T8GsSqbkZQ7I5pNu@cluster0.gslawcc.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    // LISTEN FOR REQUESTS
    app.listen(4000, () => {
      console.log("Listing on port 4000!!!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
// mongoose
//   .connect(process.env.MONGODB_URL)
//   .then(() => {
//     // LISTEN FOR REQUESTS
//     app.listen(process.env.PORT, () => {
//       console.log("Listing on port 4000!!!");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });