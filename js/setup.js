'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
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
