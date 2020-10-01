'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBERS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

var renderWizard = function (name, coatColor, eyesColor) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = name;
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < WIZARD_NUMBERS; i++) {
  var nameIndex = getRandomInt(0, WIZARD_NAMES.length);
  var surnameIndex = getRandomInt(0, WIZARD_SURNAMES.length);
  var coatColorIndex = getRandomInt(0, COAT_COLORS.length);
  var eyesColorIndex = getRandomInt(0, EYES_COLORS.length);
  fragment.appendChild(renderWizard(`${WIZARD_NAMES[nameIndex]} ${WIZARD_SURNAMES[surnameIndex]}`, COAT_COLORS[coatColorIndex], EYES_COLORS[eyesColorIndex]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
