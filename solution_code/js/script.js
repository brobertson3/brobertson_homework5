$(document).ready(function() {

	//Variable to store the user submitted city name
	var city = "";

	/* When the user clicks the update button, then run the code
	to change the background of the page based on the user 
	submission */
	$('#submit-btn').click(changeBackground);

	function changeBackground () {
		//prevent default action of submit
		event.preventDefault();
		//Store the user submission to var city and also trim the whitespace around it */
		city = $('#city-type').val().trim();
		/* Grab the user input before resetting */
		$('form')[0].reset();
		console.log("The var city is: " + city);

		/* Switch statement instead of if/else with || because it saves on typing lol.
		Compare the city variable with each expected value for each background. If a 
		value matches then change the background of the body tage to the appropriate
		image. If the value is something not expected then show a prompt letting the
		user know that their input was not valid. */
		switch (city) {
			/* Multiple cases with no break replaces the || operator */
			case "New York":
			case "New York City":
			case "NYC":
				removeBodyClass();
				$('body').addClass("nyc");
				break;
			case "San Francisco":
			case "SF":
			case "Bay Area":
				removeBodyClass();
				$('body').addClass("sf");
				break;
			case "Los Angeles":
			case "LA":
			case "LAX":
				removeBodyClass();
				$('body').addClass("la");
				break;
			case "Austin":
			case "ATX":
				removeBodyClass();
				$('body').addClass("austin");
				break;
			case "Sydney":
			case "SYD":
				removeBodyClass();
				$('body').addClass("sydney");
				break;
			default:
				removeBodyClass();
				$('body').addClass("generic_city");
				$('#submit-btn').after('<p class="invalid_choice">Not a valid option. Please select again :)</p>');
		}
		/* .attr() to log the current value of the body class to make sure that the 
		other class values are removed */
		console.log($('body').attr("class"));
	}

	function removeBodyClass() {
		/* Remove only these specific values of the body class in case we want to add 
		additional classes to the body class for another purpose */
		$('body').removeClass("nyc sf la austin sydney generic_city");
	}
});