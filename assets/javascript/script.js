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


  $('#submit').on('click', function() { 
  var news= {
    "url": "https://covidtracking.com/api/press",
    "method": "GET",
    }
  $.ajax(news).done(function(response) {
	console.log(response);

	var nDiv = $("<div id='nDiv'>");

	var title = response[0].title;
	console.log(title);
	var titleP = $("<h4>").text(title);
  })
});
// var numResults = "";

// var queryURLBase = "https://covidtracking.com/api/press"

// function runQuery(numArticles, queryURL){

// 	$.ajax({url: queryURL, method: "GET"})
// 		.done(function(press) {

// 			// console.log(response);

// 			//troubleshooting
// 			console.log(queryURL);
// 			console.log(numArticles);
// 			console.log(press);
// 		})
// }


// $('#submit').on('click', function() {
// 	numResults = $("#articles").val();
// 	console.log(response[0].author);

// 	// alert("test");

// 	// runQuery(numResults, queryURLBase);
// })


 
  var articleCounter = 0;
  

var gifArray = ['Cats', 'Animals', 'Monkeys Dancing', 'Boredom'];
var chuckAPI = "https://api.chucknorris.io/jokes/random?category=animal,career,celebrity,dev,fashion,food,history,money,movie,music,political,religion,science,sport,travel";

$(document).ready(function() {
	
	$.ajax({
		url: chuckAPI,
		type: "GET"
	}).done(function(response){
		// console.log(response);
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
		
			var newButton = $("<button id='giflist'>");
			newButton.addClass("gifbutton waves-effect waves-light btn");
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
		var gifAPI = 'https://api.giphy.com/v1/gifs/search?q= ' + (gifName || newInput) + ' &api_key=zQ9cvPUPVYGG0yHzaLmUuFwz7v7Iq5zi&limit=10'
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
//contact form message 

newContact =[];

var firebaseConfig = {
    apiKey: "AIzaSyBe8XrpsjsmnRjLpwMC3srwIyCRytawPYA",
    authDomain: "addisons-project.firebaseapp.com",
    databaseURL: "https://addisons-project.firebaseio.com",
    projectId: "addisons-project",
    storageBucket: "addisons-project.appspot.com",
    messagingSenderId: "701418838456",
    appId: "1:701418838456:web:a773fdcdbace7ecd33174d",
    measurementId: "G-G9BSS3GDKN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database=firebase.database();
  $("#submitThisForm").on("click", function () {
	newContact.firstName = $("#first_name").val();
	newContact.lastName = $("#last_name").val();
	newContact.email = $("#email").val();
	newContact.message = $("#messageinput").val();
  
	database.ref().push(newContact);
  });