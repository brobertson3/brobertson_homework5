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
		/* If the invalid choice text is still visible then remove it from the html */
		if($('.invalid_choice').length) {
			$('.invalid_choice').remove();
		}
		/*Store the user submission to var city and also trim the whitespace around it.
		Also wanted to ignore the case of the user input so I set their value to all 
		lowercase then later compared to all lowercase cases in the switch statement. */
		city = $('#city-type').val().toLowerCase().trim();
		/* Grab the user input before resetting. Resets the first element in the form. */
		$('form')[0].reset();
		console.log("The var city is: " + city);

		/* Switch statement instead of if/else with || because it saves on typing lol.
		Compare the city variable with each expected value for each background. If a 
		value matches then change the background of the body tage to the appropriate
		image. If the value is something not expected then show a prompt letting the
		user know that their input was not valid. */
		switch (city) {
			/* Multiple cases with no break replaces the || operator */
			case "new york":
			case "new york city":
			case "nyc":
				removeBodyClass();
				$('body').addClass("nyc");
				break;
			case "san francisco":
			case "sf":
			case "bay area":
				removeBodyClass();
				$('body').addClass("sf");
				break;
			case "los angeles":
			case "la":
			case "lax":
				removeBodyClass();
				$('body').addClass("la");
				break;
			case "austin":
			case "atx":
				removeBodyClass();
				$('body').addClass("austin");
				break;
			case "sydney":
			case "syd":
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