const App = require("./app");
const AuthRoute = require("./routes/auth");
const CourseRoute = require("./routes/course");
//Define whatever Routes you have here for the server to initialise

const server = new App();
server.initializedRoutes([
  new AuthRoute(),
  new CourseRoute(),
]);
server.listen();
