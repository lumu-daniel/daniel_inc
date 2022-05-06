// var playInterval;

// $.when($.getScript( "/scripts/ascii/animations.js" )).done(function(){
//     $("#btn_start").click(function(){
//         $("btn_stop").removeClass("clicked"); 
//         $(this).addClass("clicked"); 
//         if($("#turbo").is(":checked")){
//             getAnimation(50,$("#sel_anime option:selected").val());
//         }else{
//             getAnimation(2500,$("#sel_anime option:selected").val())
//         }
//     });

//     $("#btn_stop").click(function(){
//         $("btn_start").removeClass("clicked"); 
//         $(this).addClass("clicked"); 
//         if(playInterval!=null){
//             clearInterval(playInterval);
//         }
//     });

//     $('#sel_size').change(function() {
//         $("#anime_area").addClass($("#sel_size option:selected").val());
//     });

//     $('#sel_anime').change(function() {
//         $("#anime_area").addClass($("#sel_anime option:selected").val());
//     });

// });

// function getAnimation(time,type){
//     var k = "";
//     ANIMATIONS[type].split("=====").forEach(Element=>{
//         setTimeout(document.getElementById("anime_area").value = k,time)
//         k = k + Element;
//     });
// }

var ANIMATIONS = { Bike: BIKE, Exercise: EXERCISE, Dive: DIVE, Juggler: JUGGLER, 'Custom': CUSTOM };

var mytextarea = document.getElementById('anime_area');
var startBtn = document.getElementById('btn_start');
var stopBtn = document.getElementById('btn_stop');


startBtn.onclick = function () { start() };
stopBtn.onclick = function () { stop() };

var lists_animation;
var current = 0;
var end;
var speed = 250;


document.getElementById('turbo').onchange = function () {
    if (this.checked) speed = 50;
    else speed = 250;
    stop();
    start();
}
document.getElementById('sel_size').onchange = function () {
    mytextarea.style.fontSize = this.value + "pt";
    document.getElementsByClassName('container')[0].style.width = '100%';
}


var custom = false;
document.getElementById('sel_anime').onchange = function () {
    stop();
    mytextarea.value = "";
    if (this.value === 'Custom') {
        custom = true;
    } else {
        console.log(this.value);
        lists_animation = ANIMATIONS[this.value].split('=====');
        custom = false;
    }
    if (!custom) config();
}


function config() {
    current = 0;
    end = lists_animation.length;
    if (end > 0)
        set();
    else stop();
}

function set() {
    mytextarea.value = lists_animation[current];
    if (current + 1 > end - 1) current = 0;
    else current++;
}

timer = null;
function start() {
    if (custom) {
        lists_animation = mytextarea.value.split('=====');
        config();
        custom = false;

    }
    timer = setInterval(set, speed);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    if (timer != null) {

        clearInterval(timer);
        timer = null;
    }
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
