const User = require("../models/contact-model");

const contactForm = async (req, res) => {
    console.log(req.body)
    if(req.body==null){
        return res.json({ message: "Data Not Received" });
    }
    try {
        const { username, email, phone } = req.body;

        // Validate required fields
        if (!username || !phone) {
            return res.status(400).json({ message: "Username and phone are required fields." });
        }

        // Create the User document
        await User.create({ username, email, phone });
        // console.log(response)
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: error });
    }
};

module.exports = { contactForm };
