"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HelloMessage;

var _react = _interopRequireDefault(require("react"));

var _pageWrapper = _interopRequireDefault(require("./layout/page-wrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function HelloMessage() {
  return /*#__PURE__*/_react["default"].createElement(_pageWrapper["default"], {
    currentPage: "home"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "title"
  }, "Home"), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, inventore? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloribus ipsa qui adipisci optio, praesentium sunt cum assumenda totam quis.")));
}