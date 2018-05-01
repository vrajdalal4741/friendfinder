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
                "name": $('#name').val(),
                "total": parseInt($('#ans1').val()) +
                    parseInt($('#ans2').val()) +
                    parseInt($('#ans3').val()) +
                    parseInt($('#ans4').val()) +
                    parseInt($('#ans5').val()) +
                    parseInt($('#ans6').val()) +
                    parseInt($('#ans7').val()) +
                    parseInt($('#ans8').val()) +
                    parseInt($('#ans9').val()) +
                    parseInt($('#ans10').val())

            }

            console.log(newPersonData);


            // for(var i = 0, i < people.length, i++) {

            // 	let potentialFriend = people[i];
            // 	difference = 0;
            // 	console.log(potentialFriend.name);
            // }

            $.ajax({
                'url': '/people',
                'type': 'POST',
                'data': newPersonData
            })
        }
    })
})