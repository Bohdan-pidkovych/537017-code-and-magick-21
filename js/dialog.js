'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var defaultCoords = {
    x: '',
    y: ''
  };

  var calculateDefaultCoords = function () {
    defaultCoords = {
      x: userDialog.offsetLeft,
      y: userDialog.offsetTop
    };
  };

  var returnDefaultCoords = function () {
    userDialog.style.left = defaultCoords.x + 'px';
    userDialog.style.top = defaultCoords.y + 'px';
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    calculateDefaultCoords();

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    returnDefaultCoords();

    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var dialogHandle = userDialog.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var coatInput = userDialog.querySelector('input[name="coat-color"]');
  var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireballInput = wizardFireball.querySelector('input');

  wizardCoat.addEventListener('click', function () {
    var colorIndex = window.util.getRandomInt(0, window.data.COAT_COLORS.length);
    var color = window.data.COAT_COLORS[colorIndex];
    wizardCoat.style.fill = color;
    coatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var colorIndex = window.util.getRandomInt(0, window.data.EYES_COLORS.length);
    var color = window.data.EYES_COLORS[colorIndex];
    wizardEyes.style.fill = color;
    eyesInput.value = color;
  });

  wizardFireball.addEventListener('click', function () {
    var colorIndex = window.util.getRandomInt(0, window.data.FIREBALL_COLORS.length);
    var color = window.data.FIREBALL_COLORS[colorIndex];
    wizardFireball.style.background = color;
    fireballInput.value = color;
  });
})();
