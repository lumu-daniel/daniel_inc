onload = ()=>{
    let options = "";
    let data_1 = localStorage.getItem("data_1");
    data_1.split("\n").forEach(element => {
        options += "<option>"+ element +"</option>";
    });
    document.getElementById("accounts").innerHTML = options;

    document.getElementById("withdraw").onclick = ()=>{
        let x = document.getElementById("accounts");
        let y = x.options[x.selectedIndex].text;
        let amt = parseInt(document.getElementById("amount").value);
        let prev_amt = parseInt(y.substring(y.indexOf("Balance: ")+9));
        let opt = y.replace(prev_amt.toString(),(prev_amt-amt).toString());
        data_1.replace(y,opt);
        localStorage.setItem("data_1",data_1);
        open("./bank_account.html")
    }
}

