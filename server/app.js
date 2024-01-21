// index.js or app.js
require('events').defaultMaxListeners = 15;

const express = require("express");
const app = express();
app.use(express.json())
const PORT = 5001;
const contactRouter = require('./router/contactroute');
const connectDb = require("./util/dbutil")

app.use("/api", contactRouter);

connectDb().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  });
  
