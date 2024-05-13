const mongoose = require ("mongoose");
const { config } = require ("dotenv");

config();

const mongouri = process.env.MONGO_URI;

module.exports.connectDB = () => {
  mongoose
    .connect(mongouri)
    .then(() => console.log("Database Connected with MongoDB"))
    .catch((e) => console.log("Failed to connect to MongoDB:", e));
};