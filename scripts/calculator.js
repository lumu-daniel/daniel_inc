function calculateTip(){
    let amount = parseFloat(document.getElementById("sub_total").value);
    let percentage = parseFloat(document.getElementById("tip").value)/100;
    document.getElementById("total_amt").value =  parseFloat(amount*percentage).toString;
}