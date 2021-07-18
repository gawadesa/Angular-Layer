const express = require("express");
const cors = require("cors");
const app = express();

const CORS_OPTINS = {
    origin: "http://localhost:4200"
};

app.use(cors(CORS_OPTINS));
app.use(express.json());
//parse request of Content-Type:application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./db/models");

db.sequelize.sync();
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Tutorial application." });
});

require("./app-route")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});