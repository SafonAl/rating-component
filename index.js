
//chosing num opn first card
var number;
$(".circle").click(function(event) {
    number = event.target.id;
    $(".circle").removeClass("chosen-number");
    document.getElementById(number).classList.add("chosen-number");
})

//changing card after submitting
$(".submit").click(function() {
    $(".rating-state").addClass("hide");
    $(".thank-you-state").removeClass("hide");
    $(".number").text(number);
})