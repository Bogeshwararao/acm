const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", contactSchema);

module.exports = User;
