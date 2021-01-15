"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Navbar;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Navbar(_ref) {
  var currentPage = _ref.currentPage;
  return /*#__PURE__*/_react["default"].createElement("nav", null, /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", {
    className: "".concat(currentPage === "home" ? "active" : "")
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, "Home")), "|", /*#__PURE__*/_react["default"].createElement("li", {
    className: "".concat(currentPage === "about" ? "active" : "")
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/about"
  }, "About"))));
}