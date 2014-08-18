/*** GLOBAL VARIABLES ***/

// Initialize a few in-memory compliments in case call to Google Docs fails
var compliments = [
  "She is the best thing to ever happen to me",
  "She appreciates a beard like no one else I know"
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
    compliments = [];
    data.feed.entry.forEach(function(entry) {
      var compliment = entry.gs$cell.$t;
      compliments.push(compliment);
    });
  }).fail(function() {
    console.log("There was an error with the AJAX call");
  });
};

var setCompliment = function() {
  var compliment = compliments[Math.floor(Math.random() * compliments.length)];
  $('.compliment').text(compliment);
};

var setRandomBackground = function() {
  var bgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  $('body').css('background-color', bgColor);
};

var init = function() {
  getCompliments();
  setRandomBackground();
  setCompliment();
};

$(document).ready(function(){
  init();

  // Set listeners
  $('.full-width.button.refresh').on('click', function(event) {
    event.preventDefault();
    setRandomBackground();
    setCompliment();
  });
  
});





