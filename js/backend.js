'use strict';

var URL_SAVE = 'https://21.javascript.pages.academy/code-and-magick';
var URL_LOAD = 'https://21.javascript.pages.academy/code-and-magick/data';
var TIMEOUT_IN_MS = 10000;
var statusCode = {
  OK: 200
};

var save = function (data, onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === statusCode.OK) {
      onLoad(xhr.response);
    } else {
      onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = TIMEOUT_IN_MS;

  xhr.open('POST', URL_SAVE);
  xhr.send(data);
};

var load = function (onLoad, onError) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {
    if (xhr.status === statusCode.OK) {
      onLoad(xhr.response);
    } else {
      onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    onError('Произошла ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = TIMEOUT_IN_MS;

  xhr.open('GET', URL_LOAD);
  xhr.send();
};

window.backend = {
  save,
  load
};
