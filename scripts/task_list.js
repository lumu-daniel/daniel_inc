var str = [];

function addTask(){
    x = (document.getElementById(task_text)||{}).value||"";
    if(x!=null){
        str.push(x);
    }

    document.getElementById("task_text").style.display = str;
}

function clearTasks(){
    str = [];
    document.getElementById("task_text").style.display = str;
}