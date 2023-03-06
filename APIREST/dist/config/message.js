"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _colors = _interopRequireDefault(require("colors"));
var message = function message(msg, type) {
  switch (type) {
    case 'danger':
      console.log(msg.bgRed);
      break;
    case 'success':
      console.log(msg.bgGreen);
      break;
    case 'warning':
      console.log(msg.bgYellow);
      break;
    default:
      console.log(msg.bgWhite);
      break;
  }
};
module.exports = message;