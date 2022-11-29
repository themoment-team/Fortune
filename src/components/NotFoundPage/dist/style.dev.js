"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = exports.view_picture = exports.view_notFound = exports.view_textContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _img = _interopRequireDefault(require("../../imgs/img404.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 700px;\n    height: 700px;\n    opacity: 80%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: 700%;\n    color: #8f85ff;\n    font-weight: bold;\n    margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var view_textContainer = _styledComponents["default"].div(_templateObject());

exports.view_textContainer = view_textContainer;

var view_notFound = _styledComponents["default"].h1(_templateObject2());

exports.view_notFound = view_notFound;

var view_picture = _styledComponents["default"].img.attrs({
  src: "".concat(_img["default"])
})(_templateObject3());

exports.view_picture = view_picture;
var Style = {
  textContainer: view_textContainer,
  picture: view_picture,
  notFound: view_notFound
};
exports.Style = Style;