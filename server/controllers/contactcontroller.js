// contactcontroller.js

const contact = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send("Welcome contact");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = { contact };
