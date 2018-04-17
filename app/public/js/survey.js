$(document).ready(function() {
	

	$('.submit-btn').on('click', function() {
		// jQuery.ajaxSettings.traditional = true;
		//stopa page from reloading
		event.preventDefault();
		//

		if ($('#name').length === 0) {
			alert("Please fill out your name!");

		} else {

			let newPersonData = {
			name: $('#name').val(),
			eval: [
				$('#ans1').val(),
				$('#ans2').val(),
				$('#ans3').val(),
				$('#ans4').val(),
				$('#ans5').val(),
				$('#ans6').val(),
				$('#ans7').val(),
				$('#ans8').val(),
				$('#ans9').val(),
				$('#ans10').val()
			]

		}

		console.log(newPersonData);

		// $.post('/people', newPersonData, function(data){
		// 	console.log(data);
		// })
			// let answerChoices = $(".answers");
			// let answers = [];
			// Object.keys(answerChoices).forEach(function(input) {
			// 	if (answers.length < 10) {
			// 		answers.push(answerChoices[input].value)
			// 	}
			// });
			// console.log(answers);

			// let newPerson = {
			// 	'name': newPersonName,
			// 	'eval': answers
			// }

			// console.log(newPerson);


			$.ajax({
				'url': '/people',
				'type': 'POST',
				'data': newPersonData
			})
				}
			})
		})

	


