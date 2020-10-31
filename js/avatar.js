'use strict';

var FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif'];
var fileChooser = document.querySelector('.upload input[type=file]');
var preview = document.querySelector('.setup-user-pic');

fileChooser.addEventListener('change', function () {
  var file = fileChooser.files[0];
  var fileName = file.name.toLowerCase();

  var matches = FILE_TYPES.some(function (type) {
    return fileName.endsWith(type);
  });

  if (matches) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});
