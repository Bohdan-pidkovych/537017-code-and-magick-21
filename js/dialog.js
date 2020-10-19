'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setup.userDialog.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var openPopup = function () {
    window.setup.userDialog.classList.remove('hidden');
    window.util.calculateDefaultCoords();

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.setup.userDialog.classList.add('hidden');
    window.util.returnDefaultCoords();

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

  var dialogHandle = window.setup.userDialog.querySelector('.upload');

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

      window.setup.userDialog.style.top = (window.setup.userDialog.offsetTop - shift.y) + 'px';
      window.setup.userDialog.style.left = (window.setup.userDialog.offsetLeft - shift.x) + 'px';
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

  var setupWizard = window.setup.userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = window.setup.userDialog.querySelector('.setup-fireball-wrap');
  var coatInput = window.setup.userDialog.querySelector('input[name="coat-color"]');
  var eyesInput = window.setup.userDialog.querySelector('input[name="eyes-color"]');
  var fireballInput = wizardFireball.querySelector('input');

  wizardCoat.addEventListener('click', function () {
    var colorIndex = window.data.getRandomInt(0, window.data.COAT_COLORS.length);
    var color = window.data.COAT_COLORS[colorIndex];
    wizardCoat.style.fill = color;
    coatInput.value = color;
  });

  wizardEyes.addEventListener('click', function () {
    var colorIndex = window.data.getRandomInt(0, window.data.EYES_COLORS.length);
    var color = window.data.EYES_COLORS[colorIndex];
    wizardEyes.style.fill = color;
    eyesInput.value = color;
  });

  wizardFireball.addEventListener('click', function () {
    var colorIndex = window.data.getRandomInt(0, window.data.FIREBALL_COLORS.length);
    var color = window.data.FIREBALL_COLORS[colorIndex];
    wizardFireball.style.background = color;
    fireballInput.value = color;
  });
})();
