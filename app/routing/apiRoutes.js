let path = require('path');
let people = require('../data/friends.js');

const apiPaths = function (app) {
	app.get('/people', function(request, response) {
		response.json(people);
	});

	app.post('/api/people', function(request, response) {
		console.log(request.body);
		let newPerson = request.body;
		const newPersonAnswers = request.body.eval;
		let finalScores = [];
		console.log(newPersonAnswers);
		console.log(request.body.eval);

	
// for loops are only for arrays
	for (var i = 0; i < people.length; i++) {
		let differences = 0;
		for (var j = 0; j < newPersonAnswers.length; j++) {
			differences += Math.abs(parseInt(people[i].eval[j] - parseInt(newPersonAnswers[j])));
		}
		finalScores.push(differences);
	};

	let closestMatch = 0;
	for (var i = 0; i < finalScores.length; i++) {
		if (finalScores[i] <= finalScores[closestMatch]) {
			closestMatch = i;
		}
	};

	let matchedFriend = people[closestMatch];

	people.push[newPerson];

	response.json(matchedFriend);

	});
}

module.exports = apiPaths;