'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var FONT_GAP = 20;
var TEXT_NEW_LINE = 30;
var BAR_GAP = 50;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderMessage = function (ctx) {
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y + TEXT_NEW_LINE);
  ctx.fillText('Список результатов: ', CLOUD_X + FONT_GAP, CLOUD_Y + FONT_GAP + TEXT_NEW_LINE);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px "PT Mono"';
  renderMessage(ctx);

  var maxTime = getMaxElement(times);
  var randomColor = function () {
    return `hsl(${240},${100 * Math.random()}%,${50}%)`;
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - ((BAR_MAX_HEIGHT * times[i]) / maxTime) - CLOUD_GAP * 4);
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - FONT_GAP - CLOUD_GAP, BAR_WIDTH, -(BAR_MAX_HEIGHT * times[i]) / maxTime);
  }
};
