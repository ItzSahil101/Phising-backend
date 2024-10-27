//importing--requring
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

require("dotenv").config();

//middlewares
const corsOptions = {credentials: true}

app.use(cors(corsOptions))
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());


//importing or requring routes
const Main = require("./routes/Main");
const Getdata = require("./routes/getdata");

//using routes
app.use("/api/store", Main);
app.use("/api/all", Getdata);

//mongoose connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //start server
    app.listen(process.env.PORT, () => {
      console.log("DB $ Server connected Sucessfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });
