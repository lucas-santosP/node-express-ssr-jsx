"use strict";

var _app = _interopRequireDefault(require("./config/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(process.env.PORT || 8080, function () {
  console.log("Running...");
});