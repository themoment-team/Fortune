"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.view = exports.body = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    width: 720px;\n    height: 100vh;\n    background-color: #f2f3f7;\n    box-shadow: 0px 0px 23px -15px rgb(0, 0, 0);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var body = _styledComponents["default"].div(_templateObject());

exports.body = body;

var view = _styledComponents["default"].div(_templateObject2());

exports.view = view;