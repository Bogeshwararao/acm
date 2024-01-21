// index.js or app.js
require('events').defaultMaxListeners = 15;

const express = require("express");
const app = express();
app.use(express.json())
const PORT = 5001;
const contactRouter = require('./router/contactroute');

app.use("/api", contactRouter);

app.listen(PORT, () => {
    console.log(`Server is running at port:${PORT}`);
});
