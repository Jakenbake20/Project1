// Initializes the materialize navbar's collapse function to allow for mobile responsiveness.
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
//   Initalizes the materilize parallax
  $(document).ready(function(){
    $('.parallax').parallax();
  });
  // Initalizes modals
  $(document).ready(function(){
    $('.modal').modal();
  });

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://covid-19-data.p.rapidapi.com/totals?format=undefined",
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "08897b03bcmshc81efaa969f609ap1c87cdjsn9def16cda817"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
var gifArray = ['Cats', 'Animals', 'Monkeys', 'Boredom']

function displayGif() {
  $.ajax({
    url: gifAPI,
    type: "GET"
  }).done(function(response){
    console.log(response);
  })
}
