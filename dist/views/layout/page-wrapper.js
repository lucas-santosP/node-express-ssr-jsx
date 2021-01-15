"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = pageWrapper;

var _react = _interopRequireDefault(require("react"));

var _navbar = _interopRequireDefault(require("./navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function pageWrapper(props) {
  return /*#__PURE__*/_react["default"].createElement("html", {
    lang: "en"
  }, /*#__PURE__*/_react["default"].createElement("head", null, /*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/_react["default"].createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }), /*#__PURE__*/_react["default"].createElement("link", {
    rel: "stylesheet",
    href: "public/styles.css"
  }), /*#__PURE__*/_react["default"].createElement("title", null, "SSG - express and JSX")), /*#__PURE__*/_react["default"].createElement("body", null, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement(_navbar["default"], {
    currentPage: props.currentPage
  })), /*#__PURE__*/_react["default"].createElement("main", null, props.children)));
}