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

//   var news= {
//     "url": "https://covidtracking.com/api/press",
//     "method": "GET",
//     }
//   $.ajax(news).done(function(response) {
//     console.log(response);
//   });
var numResults ="";

var queryURLBase = "https://covidtracking.com/api/press"

function runQuery(numArticles, queryURL){

	$.ajax({url: queryURL, method: "GET"})
		.done(function(press) {
			console.log(queryURL);
			console.log(press);
		})
}

$('#submit').on('click', function() {

	// alert("test");
	runQuery(10, "https://covidtracking.com/api/press");
})


 
  var articleCounter = 0;
  

var gifArray = ['Cats', 'Animals', 'Monkeys Dancing', 'Boredom'];
var chuckAPI = "https://api.chucknorris.io/jokes/random";

$(document).ready(function() {
	
	$.ajax({
		url: chuckAPI,
		type: "GET"
	}).done(function(response){
		console.log(response);
		var newChuck = $("<div id='chuckjoke'>");
		var joke = response.value;
		var pJoke = $("<p>").html(joke);
		newChuck.append(pJoke);
		$("#top").prepend(newChuck);
	});
	
	//creates buttons for gifs
	function createButtons() {
		
		$("#buttons").empty()
	
		for(var i = 0; i < gifArray.length; i++) {
		
			var newButton = $("<button>");
			newButton.addClass("gifbutton waves-effect waves-light red darken-4 btn");
			newButton.attr("data", gifArray[i]);
			newButton.text(gifArray[i]);
			$("#buttons").append(newButton);
		}
	}
	
	$("#addGif").on("click", function(event) {
		event.preventDefault();
		var newInput = $("#input").val();
		displayGif()
		
	})
	//pulls and display's gifs
	function displayGif() {
		$('#gifshere').empty();
		var gifName = $(this).attr("data");
		var newInput = $("#input").val();
		var gifAPI = 'https://api.giphy.com/v1/gifs/search?q= ' + (gifName || newInput) + ' &api_key=zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi&limit=5'
		$.ajax({
			url: gifAPI,
			type: "GET"
			}).done(function(response) {
			   
		for (var i = 0; i < response.data.length; i++) {
			var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
			var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
				'" data-still=" ' + response.data[i].images.fixed_height_still.url +
				' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage responsive-img">';
	
			var imageF = $('<div class="newgif hoverable">').html(image);
			$(imageF).appendTo('#gifshere');
		}
			$('.newgif').wrapAll("<div class=ng2 />")
		$('.movImage').on('click', function() {
			var state = $(this).attr('data-state');
			if (state == 'still') {
				$(this).attr('src', $(this).attr("data-animate"));
				$(this).attr('data-state', 'animate');
			} else {
				$(this).attr('src', $(this).attr("data-still"));
				$(this).attr('data-state', 'still');
			}
	
		});
	});
	}
	
	$(document).on("click", ".gifbutton", displayGif);
		
			createButtons()
	
$(document).ready(function(){
	$('.carousel').carousel();
});
	
	
	
	
});

 
    
 