"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = setup;

var _express = _interopRequireDefault(require("express"));

var _expressReactViews = _interopRequireDefault(require("express-react-views"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function setup(app) {
  app.use("/public", _express["default"]["static"](_path["default"].join(__dirname, "../public")));
  app.use((0, _compression["default"])());
  app.use((0, _cors["default"])());
  app.set("views", _path["default"].join(__dirname, "../views"));
  app.set("view engine", "js");
  app.engine("js", _expressReactViews["default"].createEngine());
}