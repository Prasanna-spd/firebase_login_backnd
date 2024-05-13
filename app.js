const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./db/connectdb.js");
const saveUserRouter = require("./routes/saveUser.js");
const getUserRouter = require("./routes/getUser.js");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");




const app = express();


const corsMiddleware = cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});


// config({
//   path: ".env",
// });

require('dotenv').config();

app.use(bodyParser.json({ limit: '10mb' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(corsMiddleware);

connectDB();

app.get("/", (req, res) => {
  res.send("Nice working");
});

app.use("/user", saveUserRouter);
app.use("/getUser",getUserRouter );


app.listen(PORT, () => {
  console.log(`Server is working on port:${PORT}.`);
});
