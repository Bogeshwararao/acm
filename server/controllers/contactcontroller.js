const contactForm = async (req, res) => {
    try {
        const { username, email, phone } = req.body;

        // Validate required fields
        if (!username || !phone) {
            return res.status(400).json({ message: "Username and phone are required fields." });
        }

        // Create the User document
        await Contact.create({ username, email, phone });

        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Message sending unsuccessful" });
    }
};

module.exports = { contactForm };
