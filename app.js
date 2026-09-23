const express = require("express");
const app = express();
const api = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}))

const gameRoutes = require("./api/route/gameroute")

// const { log } = require("./api/middleware/logHandler");

// const errorHandler = require("./api/middleware/errorHandler");

app.use("/api",api)

api.use("/players", gameRoutes)

// app.use(...errorHandler);

module.exports = {
    app,
    api,
}