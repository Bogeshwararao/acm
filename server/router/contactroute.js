// contactroute.js

const express = require('express');
const router = express.Router();
const { contact } = require('../controllers/contactcontroller');

router.route("/contact").post(contact);

module.exports = router;
