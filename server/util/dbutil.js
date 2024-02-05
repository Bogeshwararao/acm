const mongoose = require("mongoose");

const URL = "mongodb+srv://bogeshwararao:bogeshwararao@cluster0.ckhjmhh.mongodb.net/SIST_DB?retryWrites=true&w=majority";
const connectDb = async () => {
    try {
        console.log("Connecting to MongoDB with URL");
        await mongoose.connect(URL, {
            useNewUrlParser: false, // Remove useNewUrlParser option
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Set a timeout for server selection
        });
        console.log("Connection successful");
    } catch (error) {
        console.error("Connection failed:", error.message);
        process.exit(1); // Use 1 to indicate an error
    }
};

module.exports = connectDb;
