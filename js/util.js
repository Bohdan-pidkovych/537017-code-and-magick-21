'use strict';

var userDialog = document.querySelector('.setup');
var userNameInput = userDialog.querySelector('.setup-user-name');

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var isEscEvent = function (evt, action) {
  if (evt.key === 'Escape' && evt.target !== userNameInput) {
    evt.preventDefault();
    action();
  }
};

var isEnterEvent = function (evt, action) {
  if (evt.key === 'Enter') {
    action();
  }
};

window.util = {
  getRandomInt,
  isEscEvent,
  isEnterEvent
};
