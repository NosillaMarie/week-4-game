var randomNumber;

var wins = 1;

var losses = 1;

var totalScore = 0;


var imgArray = [
     "gemImage01.jpg",
     "gemImage02.jpg",
     "gemImage03.png",
     "gemImage04.jpg"
];

function numRandom() {
    randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#rndNumber").text(randomNumber);
}
numRandom();

function clear() {
    $("#totalScore").empty();
}

function reset() {
    clear();
    numRandom();
};

var arr = [];

//var numberOptions = [Math.floor((Math.random() * 12) + 1)];

//var numberOptions = [ 4, 5, 6, 12];


while (arr.length < 4) {

    var numberOptions = Math.ceil(Math.random() * 12);
    if (arr.indexOf(numberOptions) > -1) continue;
    arr[arr.length] = numberOptions;
}
//console.log(arr);

for (var i = 0; i < arr.length; i++) {
    var gemImage = $("<img>");

    gemImage.addClass("gems theImages" + (i + 1));

    gemImage.attr("src", "placeholder");

    gemImage.attr("data-gemvalue", arr[i]);

    $("#images").append(gemImage);
};

$(".theImages1").attr("src", "assets/images/gemImage01.jpg");
$(".theImages2").attr("src", "assets/images/gemImage02.jpg");
$(".theImages3").attr("src", "assets/images/gemImage03.png");
$(".theImages4").attr("src", "assets/images/gemImage04.jpg");


//console.log(numberOptions);

$(".gems").on("click", function () {


    var gemValue = ($(this).attr("data-gemvalue"));

    gemValue = parseInt(gemValue);


    $("#totalScore").text(totalScore += gemValue);

    alert("Points: " + gemValue);

    if (totalScore === randomNumber) {
        $("#wins").text("Wins: " + wins++);
        alert("You Win!");
        reset();
    } 
    else if (totalScore > randomNumber) {
        $("#losses").text("Losses: " + losses++);
        alert("You Lose!");
        reset();
    }

});
