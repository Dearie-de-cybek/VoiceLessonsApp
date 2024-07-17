const express = require("express");
const session = require("express-session");
const cors = require("cors");
const env = require("./config/env.js");
const { requestLogger } = require("./middlewares/logger.js");
const bodyParser = require("body-parser");
const HandleErrors = require("./middlewares/error.js");
const logger = require("./config/logger.js");

class App {
  constructor() {
    this.app = express();
    this.env = env;
    this.port = process.env.PORT ?? 8080;
    this.initializeMiddlewares();
  }

  initDB() {
    // * initialization of the database
  }

  initializeMiddlewares() {
    // initialize server middlewares

    // Set up session middleware
    this.app.use(
      session({
        secret: "your-secret-key", // Replace with your secret key
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Set secure to true if using HTTPS
      })
    );

    this.app.use(requestLogger);
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  listen() {
    // initialize database
    this.initDB();
    // listen on server port
    this.app.listen(this.port, () => {
      logger.info("Server started at http://localhost:" + this.port);
    });
  }

  listen() {
    // initialize database
    this.initDB();
    // listen on server port
    this.app.listen(this.port, () => {
      logger.info("Server started at http://localhost:" + this.port);
    });
  }

  initializedRoutes(routes) {
    // initialize all routes middleware
    routes.forEach((route) => {
      this.app.use("/api", route.router);
    });

    this.app.all("*", (req, res) => {
      return res.status(404).json({
        errorStatus: true,
        code: "--route/route-not-found",
        message: "The requested route was not found.",
      });
    });
    // handle global errors
    this.app.use(HandleErrors);
  }
}

module.exports = App;
