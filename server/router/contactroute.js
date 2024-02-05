// contactroute.js

const express = require('express');
const router = express.Router();
const { contactForm } = require('../controllers/contactcontroller');

router.route("/contact").post(contactForm);

module.exports = router;
