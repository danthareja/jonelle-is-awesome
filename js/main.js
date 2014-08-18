/*** GLOBAL VARIABLES ***/

// Initialize a few in-memory compliments in case call to Google Docs fails
var compliments = [
  "You're the best thing to ever happen to me",
  "You appreciate a beard like no one else",
];

var backgroundColors = [
  "#1A4F63",
  "#068587",
  "#6FB07F",
  "#FCB03C",
  "#FC5B3F",
  "#982E4B",
  "#713045"
];


var getCompliments = function() {
  var key = "1DMXkg2PL44_kj-04m8r5NBEf5HmADKunQGbQjAoARXs";
  $.getJSON("https://spreadsheets.google.com/feeds/cells/" + key + "/od6/public/values?alt=json")
  .done(function(data) {
    console.log(data);
  }).fail(function() {
    console.log("error");
  }).always(function() {
    console.log("AJAX call complete");
  });
};

var setRandomCompliment = function() {

};

var setRandomBackground = function() {
  var bgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  $('body').css('background-color', bgColor);
};
$(document).ready(function(){
  setRandomBackground();
  
});