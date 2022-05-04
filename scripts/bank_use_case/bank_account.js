
function getAccounts(){

}

function triggerBtnIntents(){
    document.getElementById("create_btn").onclick = ()=>{
        let a = new Account();
        a.createAccount();
        Account.accounts.push(a);
        localStorage.setItem("data_1",Account.toString());
        document.getElementById("acct_summary").value = localStorage.getItem("data_1");

    }

    document.getElementById("deposit_btn").onclick = ()=>{
        deposit();
    }

    document.getElementById("withdraw_btn").onclick = ()=>{
        withdraw();
    }
    document.getElementById("acct_summary").value = localStorage.getItem("data_1");
}

function deposit(){
    open("./deposit.html");
}

function withdraw(){
    open("./withdraw.html");
}

window.onload = function(){
    triggerBtnIntents();
    document.getElementById("acct_summary").value = localStorage.getItem("data");
}

class Account{
    #ac_typ; #ac_blc;
    static accounts = [];

    createAccount(){
        this.#ac_typ = document.getElementById("acc_typ").value;
        this.#ac_blc = parseInt(document.getElementById("amt").value);
    }

    static toString(){
        let summary = "";
        if(Account.accounts.length>0){
            Account.accounts.forEach(element => {
                summary+= "Account Name: "+element.#ac_typ+" Balance: "+element.#ac_blc+"\n";
             });
        }
        return summary;
    }
}