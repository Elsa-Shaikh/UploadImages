const express = require("express");
const prisma = require("./prisma/index");
const Routes = require("./routes/userRoute");
var cors = require("cors");

require("dotenv").config();
const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // middleware to use the json

app.use("/api", Routes);
app.use("/uploads", express.static("./uploads"));

app.listen(port, () => {
  console.log(
    `Upload Image Backend is running on the http://localhost:${port}`
  );
});
