'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var setupWizard = userDialog.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
  var coatInput = userDialog.querySelector('input[name="coat-color"]');
  var eyesInput = userDialog.querySelector('input[name="eyes-color"]');
  var fireballInput = wizardFireball.querySelector('input');

  var wizard = {
    onEyesChange: function (color) {
      return color;
    },
    onCoatChange: function (color) {
      return color;
    }
  };

  wizardCoat.addEventListener('click', function () {
    var colorIndex = window.util.getRandomInt(0, window.data.COAT_COLORS.length);
    var color = window.data.COAT_COLORS[colorIndex];
    wizardCoat.style.fill = color;
    coatInput.value = color;
    wizard.onCoatChange(color);
  });

  wizardEyes.addEventListener('click', function () {
    var colorIndex = window.util.getRandomInt(0, window.data.EYES_COLORS.length);
    var color = window.data.EYES_COLORS[colorIndex];
    wizardEyes.style.fill = color;
    eyesInput.value = color;
    wizard.onEyesChange(color);
  });

  wizardFireball.addEventListener('click', function () {
    var colorIndex = window.util.getRandomInt(0, window.data.FIREBALL_COLORS.length);
    var color = window.data.FIREBALL_COLORS[colorIndex];
    wizardFireball.style.background = color;
    fireballInput.value = color;
  });

  window.wizard = wizard;
})();
