const path = require("path");

module.exports = {
  entry: [
    "./js/stat.js",
    "./js/backend.js",
    "./js/data.js",
    "./js/util.js",
    "./js/debounce.js",
    "./js/avatar.js",
    "./js/render.js",
    "./js/wizard.js",
    "./js/setup.js",
    "./js/move.js",
    "./js/game.js"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname),
    iife: true
  },
  devtool: false
}
