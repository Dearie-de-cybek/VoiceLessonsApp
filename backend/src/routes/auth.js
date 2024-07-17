const express = require("express");
const useCatchErrors = require("../error/catchErrors");
const auth = require("../controller/authcontroller")
class AuthRoute {
  router = express.Router();
  // authController = new AuthController();

  path = "/auth";

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // this.router.post(
    //   `${this.path}/user/signup`,
    //   useCatchErrors(this.authController.userSignup.bind(this.authController))
    // );
    // this.router.post(
    //   `${this.path}/login`,
    //   useCatchErrors(this.authController.login.bind(this.authController))
    // );

    this.router.post(
      `${this.path}/api/register`, auth.register
    );
    this.router.post(
      `${this.path}/api/login`, auth.login
    );
    this.router.post(
      `${this.path}/api/update/:userId`, auth.updateProfile
    );
    this.router.get(
      `${this.path}/api/dashboard`, auth.dashboard
    )

  }
}

module.exports = AuthRoute;
