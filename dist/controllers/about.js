"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(req, res) {
  res.render("about", {
    text: "this is some text via props"
  });
}