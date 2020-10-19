'use strict';
(function () {
  var isEscEvent = function (evt, action) {
    if (evt.key === 'Escape' && evt.target !== window.setup.userNameInput) {
      evt.preventDefault();
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.key === 'Enter') {
      action();
    }
  };

  var defaultCoords = {
    x: '',
    y: ''
  };

  var calculateDefaultCoords = function () {
    defaultCoords = {
      x: window.setup.userDialog.offsetLeft,
      y: window.setup.userDialog.offsetTop
    };
  };

  var returnDefaultCoords = function () {
    window.setup.userDialog.style.left = defaultCoords.x + 'px';
    window.setup.userDialog.style.top = defaultCoords.y + 'px';
  };

  window.util = {
    isEscEvent,
    isEnterEvent,
    calculateDefaultCoords,
    returnDefaultCoords
  };
})();
