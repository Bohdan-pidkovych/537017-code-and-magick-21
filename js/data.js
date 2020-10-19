'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_NUMBERS = 4;

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

  window.data = {
    WIZARD_NAMES,
    WIZARD_SURNAMES,
    COAT_COLORS,
    EYES_COLORS,
    FIREBALL_COLORS,
    WIZARD_NUMBERS,
    getRandomInt,
    renderArrayWizards
  };
})();
