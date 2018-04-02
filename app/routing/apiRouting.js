let path = require('path');
let people = require('../data/friends.js');

const apiPaths = function (app) {
	app.get('/people', function(request, response) {
		response.json(people);
	});
}

module.exports = apiPaths;