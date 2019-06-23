//PSEUDO CODE

// FIRST CREATE A CLICK EVENT WITH IMAGES THAT GENERATES NUMBERS AND PUSH IT TO TOTALSCORE
// CREATE RANDOM NUMBER ON THE SCORE
// CREATE IF/ELSE STATEMENT SAYING IF THE SCORE MATCHES THE TOTAL SCORE WINS++, ELSE LOSSES++,
// AFTER EACH WINS AND LOOSES REST THE GAME WITH ANOTHER RANDOM NUMBER.



    //Global Variable
    var blueDiamond = 0;
    var redDiamond = 0;
    var yellowDiamond = 0;
    var purpleDiamond = 0;

    var wins = 0;
    var losses = 0;

    var computerScore = 0;
    var userScore = 0;

    //Functions
    function diamonds() {
        blueDiamond = Math.floor(Math.random() * 12) + 1;
        redDiamond = Math.floor(Math.random() * 12) + 1;
        yellowDiamond = Math.floor(Math.random() * 12) + 1;
        purpleDiamond = Math.floor(Math.random() * 12) + 1;
        computerScore = Math.floor(Math.random() * 120) + 19;
    $("#score").html(computerScore);
    }
    diamonds();
    function reset() {
        bluedDiamond = 0;
        redDiamond = 0;
        yellowDiamond = 0;
        purpleDiamond = 0;
        userScore = 0;
        computerScore = 0;
        diamonds();
    }

    //COMPUTER SCORE GENeRATED

    // computerScore = Math.floor(Math.random() * 120) + 19;
    // $("#score").append(computerScore);

    //IMAGES BEING GENERATED RANDOM NUMBER
    function iftest() {
    if (userScore === computerScore) {
        alert("you win");
        wins++;
        document.getElementById("Wins").innerHTML = wins
        reset();
    }

    if (userScore > computerScore) {
        alert("you loose");
        losses++
        $("#Losses").text(losses)
        reset();
    }
}
    console.log("blue " + blueDiamond);
$(document).ready(function(){
    $("#blueDiamond").click(function () {
        userScore += blueDiamond;
        console.log("BLUE " + userScore);
        $("#user-score").text(userScore);
        iftest()
    })
    $("#redDiamond").click(function () {
        userScore += redDiamond;
        console.log("RED " + userScore);
        $("#user-score").text(userScore);
        iftest()
    })
    $("#yellowDiamond").click(function () {
        userScore += yellowDiamond;
        console.log("YELLOW " + userScore);
        $("#user-score").text(userScore);
        iftest()
    })
    $("#purpleDiamond").click(function () {
        userScore += purpleDiamond;
        console.log("PURPLE " + userScore);
        $("#user-score").text(userScore);
        iftest()
    })

    // console.log("usc: " + userScore)
    // console.log("css: " + computerScore)

    // if (userScore === computerScore) {
    //     alert("you win");
    //     document.getElementById("Wins").innerHTML = wins++
    //     //wins++;
    //     reset();
    // }

    // if (userScore > computerScore) {
    //     alert("you loose");
    //     document.getElementById("Losses").innerHTML = losses++
    //     losses++;
    //     reset();
    // }
});



//IF AND ELSE STATEMENTS
// if (computerScore === userScore) {
//     console.log("usc: " + userScore)
//     console.log("css: " + computerScore)
//     wins++;
//     $("#Wins").text(wins);
//     reset();
// } else if (computerScore !== userScore) {
//     losses++;
//     $("#Looses").text(losses);
//     reset();
// } else {
//     console.log("SOMETHING WENT WRONG")
// }


// FAILED ATTEMPT

        // randomGenerator = Math.floor(Math.random() * 12) + 1;
        // console.log(randomGenerator);
        // $("#user-score").text(randomGenerator);
        // var images = ["#blueDiamond", "#yellowDiamond", "#redDiamond", "purpleDiamond"];
        // for (i = 0; i < images.length; i++) {
        // randomGenerator = Math.floor(Math.random() * 12) + 1;
        // }