let person = "";
let potentialFriendOne = [];
let potentialFriendOneEval = 0;
let people = [{
        name: "Vraj",
        phone: "5514820652",
        eval: "2535312334"
    },
    {
        name: "Geronimo",
        phone: "2965943633",
        eval: "3524132212"
    },
    {
        name: "James",
        phone: "9342824165",
        eval: "3524132212"
    },
    {
        name: "Andrew",
        phone: "7346192435",
        eval: "2356431254"
    },
    {
        name: "Ryan",
        phone: "0324749323",
        eval: "1235343223"
    },
    {
        name: "Cole",
        phone: "3874234056",
        eval: "45121252332"
    },
    {
        name: "Kyle",
        phone: "2987343947",
        eval: "1223522123"
    },
    {
        name: "Matt",
        phone: "0945678343",
        eval: "25231315214"
    },
    {
        name: "Jefferson",
        phone: "2319804345",
        eval: "2235432234"
    },
];

//when .answer is clicked on do this:
$(".ans1").on("click", function(event) {
    person += "1";
    console.log(person);
});

$(".ans2").on("click", function(event) {
    person += "2";
});

$(".ans3").on("click", function(event) {
    person += "3";
});

$(".ans4").on("click", function(event) {
    person += "4";
});

$(".ans5").on("click", function(event) {
    person += "5";
});

$(".answerLast").on("click", function(event) {
	console.log(people);
	console.log(person);
	console.log(potentialFriendOne);
	for(let i = 0; i < people.length; i++) {
		
			if (potentialFriendOne == "") {
					potentialFriendOne = people[i];
						for(let j = 0; j < person.length; j++) {
						potentialFriendOneEval += parseInt(Math.abs(parseInt(person.substr(j, 1) - parseInt(people[i].eval.substr(j, 1)))));
						console.log(potentialFriendOne);
						}
						console.log("eval: " + potentialFriendOne);
			}
			else {
				let potentialFriendTwo = people[i];
				let potentialFriendTwoEval = "";
					for(let j = 0; j < person.length; j++) {
						potentialFriendTwoEval += parseInt(Math.abs(parseInt(person.substr(j, 1) - parseInt(people[i].eval.substr(j, 1)))));
						console.log("eval: " + potentialFriendTwo);
						}
				if (potentialFriendTwoEval < potentialFriendOneEval) {
					potentialFriendOne = potentialFriendTwo;
					potentialFriendOneEval = potentialFriendTwoEval;
					consolelog(potentialFriendOne);
				}
			}
	}
	console.log(potentialFriendOne);
})
