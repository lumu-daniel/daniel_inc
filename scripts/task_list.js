var str = [];

function addTask(){
    x = (document.getElementById(task_text)||{}).value||"";
    if(x!=null){
        str.push(x);
    }
    localStorage.setItem("Data",str.join("\n"))
    document.getElementById("task_text").style.display = localStorage.getItem("Data");
}

function clearTasks(){
    str = [];
    document.getElementById("task_text").style.display = str;
}