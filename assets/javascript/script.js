// Initializes the materialize navbar's collapse function to allow for mobile responsiveness.
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
//   Initalizes the materilize parallax
  $(document).ready(function(){
    $('.parallax').parallax();
  });

var gifArray = ['Cats', 'Animals', 'Monkeys', 'Boredom']
var gifName = "";  
var gifAPI = 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi&limit=10'

function displayGif() {
  $.ajax({
    url: gifAPI,
    type: "GET"
  }).done(function(response){
    console.log(response);
  })
}