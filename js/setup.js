'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderOneWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function () {
    var fragment = document.createDocumentFragment();
    var wizards = window.data.renderArrayWizards();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderOneWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  };

  renderWizards();
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
