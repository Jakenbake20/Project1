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

  var news= {
    "url": "https://covidtracking.com/api/press",
    "method": "GET",
    }
  $.ajax(news).done(function(response) {
    console.log(response);
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
			newButton.addClass("gifbutton");
			newButton.attr("data", gifArray[i]);
			newButton.text(gifArray[i]);
			$("#buttons").append(newButton);
		}
	}
	
	$("#add-item").on("click", function(event) {
		event.preventDefault();
		var newInput = $("#input").val();
		gifArray.push(newInput);
		createButtons()
	})
	//pulls and display's gifs
	function displayGif() {
		$('#gifshere').empty();
		var gifName = $(this).attr("data");
		var gifAPI = 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi&limit=5'
		$.ajax({
			url: gifAPI,
			type: "GET"
			}).done(function(response) {
			   
		for (var i = 0; i < response.data.length; i++) {
			var rating = "<div class='ratings'> Rating:  " + (response.data[i].rating) + " </div>";
			var image = rating + '<img src= " ' + response.data[i].images.fixed_height_still.url +
				'" data-still=" ' + response.data[i].images.fixed_height_still.url +
				' " data-animate=" ' + response.data[i].images.fixed_height.url + '" data-state="still" class="movImage">';
	
			image = '<div class="newgif">' + image + "</div>";
			$('#gifshere').prepend(image);
		}
	
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
	});

 
    
 