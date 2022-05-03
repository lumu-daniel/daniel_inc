checkbox = document.getElementById('bling');
timer = null;
function bigger($cancel) {
    var textarea = document.getElementById('textarea');
    var size = (window.getComputedStyle(textarea, null).getPropertyValue('font-size'));
    var fontSize = (3 * parseFloat(size)) / 4 + 2;
    textarea.style.fontSize = fontSize + "pt";
    if (timer === null) {
        timer = setInterval(bigger, 500, 1);
    } else if ($cancel === 0) {
        clearInterval(timer);
        timer = null;
    }
}

function igpay(){
    var textarea = document.getElementById('textarea');
    var arrayOfLines = textarea.value.split("\n");
    for(var i = 0;i < arrayOfLines.length;i++){
        arrayOfLines[i]
        console.log(arrayOfLines[i])
    }
}

checkbox.addEventListener('change', e => {
    var textarea = document.getElementById("textarea");
    if (e.target.checked) {
        textarea.style.color = "green";
        textarea.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    } else
        textarea.style.color = "black";
});
