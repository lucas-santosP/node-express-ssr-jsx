"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = _interopRequireDefault(require("../controllers/home"));

var _about = _interopRequireDefault(require("../controllers/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(app) {
  app.get("/", _home["default"]);
  app.get("/about", _about["default"]);
};

exports["default"] = _default;