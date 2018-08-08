$(document).ready(function () {
    
    $('#submitButton').on('click', function (event) {
        event.preventDefault();

        var userScores = {
            name: $('#userName').val().trim(),
            photo: $('#userPhoto').val().trim(),
            scores: [
                $('#question1').val().trim(),
                $('#question2').val().trim(),
                $('#question3').val().trim(),
                $('#question4').val().trim(),
                $('#question5').val().trim(),
                $('#question6').val().trim(),
                $('#question7').val().trim(),
                $('#question8').val().trim(),
                $('#question9').val().trim(),
                $('#question10').val().trim()
            ]
        };

        console.log(userScores);
        $.post('/api/friends', userScores)
            .done(function (data) {
                console.log('response = ' + JSON.stringify(data));
                // Set the name and image values of friend match
                $('#userMatch').html(data.matchName);
                $("#userMatchImage").attr("src", data.matchImage);
                // Open the modal
                $('#myModal').modal('open');
            });
    });



});