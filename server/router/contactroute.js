const express = require('express');
const router = express.Router();
const { contactForm, fetchDataByEmail } = require('../controllers/contactcontroller');

// POST route for submitting the contact form
router.route("/contact").post(contactForm);

// GET route for fetching data based on email
router.route("/data/:email").get(fetchDataByEmail);

module.exports = router;
