require('./models')
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors())
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
    express.urlencoded({
        extended: true,
    })
);

// routes
app.use('/api/v1', require('./routes/v1/index'));

// handle undefined routes
app.use("*", (req, res) => {
    res.status(404).json({
        success: "false",
        message: "Page not found",
        error: {
            statusCode: 404,
            message: "You reached a route that is not defined on this server",
        },
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});