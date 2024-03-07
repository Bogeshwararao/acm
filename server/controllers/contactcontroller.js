const User = require("../models/contact-model");

const contactForm = async (req, res) => {
    try {
        const { username, email, phone } = req.body;

        // Create the User document
        await User.create({ username, email, phone });
        // console.log(response)
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
         return res.status(500).json({ message: error });
    }
};

const fetchDataByEmail = async (req, res) => {
    try {
      const email = req.params.email;
  
      // Fetch data from MongoDB based on the provided email
      const user = await User.findOne({ email }); 
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Send the data as a JSON response
      res.json(user);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      return res.status(404).json({ error: 'User not found' });
    }
  };

module.exports = { contactForm , fetchDataByEmail };
