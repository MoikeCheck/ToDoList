function takeInput(){
    var newTask = document.getElementById("task-input").Value;
    let listItems = [];
    listItems.push(newTask.String())
    document.getElementById("new-task").innerHTML = listItems;
}