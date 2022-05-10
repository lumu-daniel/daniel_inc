
$(document).ready(function(){
    $("#maze .boundary").mouseover(red);
    $("#end").mouseover(end);
    $("#start").click(reset);
});

function red(){
    $("#maze .boundary").css("background-color","red");
    alert("You lose!");
}

function end(){
    $("#maze .boundary").css("background-color","green");
    alert("You Win!");
}

function reset(){
    $("#maze .boundary").css("background-color","transparent");
}