const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("container-list");

// FOR ADDING TASK IN THE LIST
function addTask(){
    if(inputbox.value ==='')
    alert("Soory You have to enter some task to add");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        // FOR ADDING CROSS SYMBOL
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // FOR CLEARING INPUT
    inputbox.value ="";
    saveData();
}

//FOR DELETE THE TASK AND CHECK AND UNCHECK THE TASK
listcontainer.addEventListener("click", function(e){
    //for check and uncheck the task
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();//for save the changes
    }
    //for removing the task on clicking the cross
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//for saving the data so that we can access again
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
//for getting the saved data 
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();