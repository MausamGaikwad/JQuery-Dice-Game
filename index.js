var player1Score=0;
var player2Score=0;

$(document).ready(function() {
    rollDice(); // Call the function to initialize the dice on page load
});

$("#roll-button").click(function(){
    rollDice(); // Call the function when the button is clicked
});

function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomImgSource1 = "images/" + randomDiceImage1;
    $(".img1").attr("src", randomImgSource1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomImgSource2 = "images/" + randomDiceImage2;
    $(".img2").attr("src", randomImgSource2);

    update(randomNumber1, randomNumber2);
}

function update(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2) {
        $("h1").text("🚩 Player 1 Wins!");
        player1Score++;
    } else if (randomNumber1 < randomNumber2) {
        $("h1").text("Player 2 Wins! 🚩");
        player2Score++;
    } else {
        $("h1").text("MATCH DRAW 🤝");
    }
    $("#player1-score").text("Player 1 Score: " + player1Score);
    $("#player2-score").text("Player 2 Score: " + player2Score);
}
