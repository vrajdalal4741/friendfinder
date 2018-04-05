$(document).ready(function() {
	

	$('.submit-btn').on('click', function() {
		// jQuery.ajaxSettings.traditional = true;
		event.preventDefault();

		let newPersonName = $('#name').val().trim();

		if (newPersonName.length === 0) {
			alert("Please fill out your name!");

		} else {

			let answerChoices = $(".answers");
			let answers = [];
			Object.keys(answerChoices).forEach(function(input) {
				if (answers.length < 10) {
					answers.push(answerChoices[input].value)
				}
			});
			console.log(answers);

			let newPerson = {
				'name': newPersonName,
				'eval': answers
			}

			console.log(newPerson);

			$.ajax({
				'url': '/api/people',
				'type': 'POST',
				'data': {
					'name': newPersonName,
					'eval': answers
				},
				'dataType': 'json',
				'success': function (result) {
					console.log(result);
				}
			})
				}
			})
		})

	


