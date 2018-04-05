$(document).ready(function() {
	

	$('.submit-btn').on('click', function() {
		// jQuery.ajaxSettings.traditional = true;
		event.preventDefault();

		let newPerson = $('#name').val().trim();

		if (newPerson.length === 0) {
			alert("Please fill out your name!");
		} else {

			let answerChoices = $(".answer");
			let answers =[];

			console.log(answerChoices);
		}
	})

})