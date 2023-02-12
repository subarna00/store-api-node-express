require("dotenv").config();

const express = require("express");
const routeNotFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");


const app = express();

// routes


// not found route
app.use(notFound);
app.use(errorMiddleware);

// middleware
app.use(express.json());

// db connect
const PORT = process.env.PORT || 5000;

const start = async () => {
    try {
        app.listen(PORT, console.log(`connected in port ${PORT} `))
    } catch (error) {
        console.log(error);
    }
}
start();