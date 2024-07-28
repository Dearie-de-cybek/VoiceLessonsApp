const express = require("express");
const useCatchErrors = require("../error/catchErrors");
const course = require("../controller/coursecontroller");
const middleware = require("../middlewares/auth");
const upload = require("../middlewares/upload");
class CourseRoute {
  router = express.Router();
  // authController = new AuthController();

  path = "/course";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {

    this.router.post(`${this.path}/store`,upload, course.saveCourse);
  }
}

module.exports = CourseRoute;
