const mongoose = require("mongoose");

const URL = process.env.MONGO_DB;

const connectDb = async () => {
    try {
        console.log("Connecting to MongoDB with URL");
        await mongoose.connect(URL);
        console.log("Connection successful");
    } catch (error) {
        console.error("Connection failed:", error.message);
        process.exit(1); // Use 1 to indicate an error
    }
};

module.exports = connectDb;
