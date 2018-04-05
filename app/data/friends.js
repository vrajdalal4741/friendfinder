// let person = "";
// let potentialFriendOne = [];
// let potentialFriendOneEval = 0;
let people = [{
        "name": "Vraj",
        "eval": ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']
    },
    {
        "name": "Geronimo",
        "eval": ['2', '3', '4', '5', '1', '2', '3', '4', '5', '1']
    },
    {
        "name": "James",
        "eval": ['3', '4', '5', '1', '2', '3', '4', '5', '1', '2']
    },
    {
        "name": "Andrew",
        "eval": ['4', '5', '1', '2', '3', '4', '5', '1', '2', '3']
    },
    {
        "name": "Ryan",
        "eval": ['5', '1', '2', '3', '4', '5', '1', '2', '3', '4']
    },
    {
        "name": "Cole",
        "eval": ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']
    },
    {
        "name": "Kyle",
        "eval": ['2', '3', '4', '5', '1', '2', '3', '4', '5', '1']
    },
    {
        "name": "Matt",
        "eval": ['3', '4', '5', '1', '2', '3', '4', '5', '1', '2']
    },
    {
        "name": "Jefferson",
        "eval": ['4', '5', '1', '2', '3', '4', '5', '1', '2', '3']
    },
];

module.exports = people;

// //when .answer is clicked on do this:
// $(".ans1").on("click", function(event) {
//     person += "1";
//     console.log(person);
// });

// $(".ans2").on("click", function(event) {
//     person += "2";
// });

// $(".ans3").on("click", function(event) {
//     person += "3";
// });

// $(".ans4").on("click", function(event) {
//     person += "4";
// });

// $(".ans5").on("click", function(event) {
//     person += "5";
// });

// $(".answerLast").on("click", function(event) {
// 	console.log(people);
// 	console.log(person);
// 	console.log(potentialFriendOne);
// 	for(let i = 0; i < people.length; i++) {
		
// 			if (potentialFriendOne == "") {
// 					potentialFriendOne = people[i];
// 						for(let j = 0; j < person.length; j++) {
// 						potentialFriendOneEval += parseInt(Math.abs(parseInt(person.substr(j, 1) - parseInt(people[i].eval.substr(j, 1)))));
// 						console.log(potentialFriendOne);
// 						}
// 						console.log("eval: " + potentialFriendOne);
// 			}
// 			else {
// 				let potentialFriendTwo = people[i];
// 				let potentialFriendTwoEval = "";
// 					for(let j = 0; j < person.length; j++) {
// 						potentialFriendTwoEval += parseInt(Math.abs(parseInt(person.substr(j, 1) - parseInt(people[i].eval.substr(j, 1)))));
// 						console.log("eval: " + potentialFriendTwo);
// 						}
// 				if (potentialFriendTwoEval < potentialFriendOneEval) {
// 					potentialFriendOne = potentialFriendTwo;
// 					potentialFriendOneEval = potentialFriendTwoEval;
// 					consolelog(potentialFriendOne);
// 				}
// 			}
// 	}
// 	console.log(potentialFriendOne);
// })
