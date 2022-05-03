function calculateTip(){
    let amount = parseFloat(document.getElementById("sub_total").value);
    let percentage = parseFloat(document.getElementById("tip").value)/100;
    document.getElementById("total_amt").value =  parseFloat(amount*percentage).toString;
    trial()
}

var myfunc = function(a, x) {
    return a * x;
};

function trial(){
   var x = myfunc(2, 3);
   var y = myfunc;
   alert(x);
   alert(y(2,3));
}
   