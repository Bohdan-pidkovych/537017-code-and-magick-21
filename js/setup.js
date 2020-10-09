'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_NUMBERS = 4;

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var renderArrayWizards = function () {
  var wizardsArray = [];
  for (var i = 0; i < WIZARD_NUMBERS; i++) {
    var nameIndex = getRandomInt(0, WIZARD_NAMES.length);
    var surnameIndex = getRandomInt(0, WIZARD_SURNAMES.length);
    var coatColorIndex = getRandomInt(0, COAT_COLORS.length);
    var eyesColorIndex = getRandomInt(0, EYES_COLORS.length);
    wizardsArray[i] = {
      name: `${WIZARD_NAMES[nameIndex]} ${WIZARD_SURNAMES[surnameIndex]}`,
      coatColor: COAT_COLORS[coatColorIndex],
      eyesColor: EYES_COLORS[eyesColorIndex]
    };
  }
  return wizardsArray;
};

var renderOneWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizards = renderArrayWizards();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderOneWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

renderWizards();
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');
var userNameInput = userDialog.querySelector('.setup-user-name');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape' && evt.target !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }

  userNameInput.reportValidity();
});

var setupWizard = userDialog.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = userDialog.querySelector('.setup-fireball-wrap');
var coatInput = userDialog.querySelector('input[name="coat-color"]');
var eyesInput = userDialog.querySelector('.eyes-color');
var fireballInput = wizardFireball.querySelector('input');

wizardCoat.addEventListener('click', function () {
  var colorIndex = getRandomInt(0, COAT_COLORS.length);
  var color = COAT_COLORS[colorIndex];
  wizardCoat.style.fill = color;
  coatInput.value = color;
});

wizardEyes.addEventListener('click', function () {
  var colorIndex = getRandomInt(0, EYES_COLORS.length);
  var color = EYES_COLORS[colorIndex];
  wizardEyes.style.fill = color;
  eyesInput.value = color;
});

wizardFireball.addEventListener('click', function () {
  var colorIndex = getRandomInt(0, FIREBALL_COLORS.length);
  var color = FIREBALL_COLORS[colorIndex];
  wizardFireball.style.background = color;
  fireballInput.value = color;
});
