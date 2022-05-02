var str = [];

function addTask(){
    x = (document.getElementById("task_text")||{}).value||"";
    document.getElementById("task_text").value = "";
    if(x!=null){
        str.push(x);
    }
    localStorage.setItem("Data",str.join("\n"));
    document.getElementById("area_1").value = localStorage.getItem("Data");
}

function clearTasks(){
    str = [];
    document.getElementById("task_text").style.display = str;
    localStorage.clear;
    document.getElementById("area_1").value = "";   
}