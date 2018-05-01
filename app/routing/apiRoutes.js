let path = require('path');
let people = require('../data/friends.js');

const apiPaths = function(app) {

    app.get('/people', function(request, response) {
        response.json(people);
    });

    app.post('/people', function(request, response) {
        console.log(request.body);
        //creating new person and adding values
        let newPersonData = request.body;
        let newPersonAnswers = newPersonData.total;
        let closestMatch = {
            name: "",
            total: ""
        };



        let finalScores = [];
        console.log(newPersonAnswers);



        // for loops are only for arrays
        for (var i = 0; i < people.length; i++) {
            let currentFriend = people[i];
            let differences = 0;
            console.log(currentFriend);


            //grab current friend score 
            //compare if they are an exact match
            // if yes, set value of closest match to currentFriend
            // if theyre no matches, send message

            

            // for (var j = 0; j < newPersonAnswers.length; j++) {
            // 	differences += Math.abs(parseInt(people.total - parseInt(newPersonAnswers[j])));
            // }
            // finalScores.push(differences);
        };


        	for (var i = 0; i < finalScores.length; i++) {
        		if (finalScores[i] <= finalScores[closestMatch]) {
        			closestMatch = i;
        		}
        	};

        // 	let matchedFriend = people[closestMatch];

        	people.push(newPersonData);

        // 	response.json(matchedFriend);

    });
};

module.exports = apiPaths;