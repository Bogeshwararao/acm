require('events').defaultMaxListeners = 15;

const express = require("express");
const app = express();
const PORT = 5001;
const connectDb = require("./util/dbutil");
const cors = require("cors");

app.use(express.json());

// Use cors middleware to allow requests from any origin during development
app.use(cors());

const contactRouter = require('./router/contactroute');
app.use("/api", contactRouter);
connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
});
