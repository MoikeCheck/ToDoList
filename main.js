/*let tasks = [];
let taskinputElement = document.getElementById("taskInput")
let tasklistElement = document.getElementById("tasks")

function takeInput(newTask) {
    tasks.push(newTask.value)
    renderTasks()
}

function renderTasks() {
    var tasksHTML = ""
    for (var i = 0; i < tasks.length; i++) { 
        tasksHTML+= "<li>"
        tasksHTML+= tasks[i] 
        tasksHTML+= "</li>"
    }
    tasklistElement.innerHTML = tasksHTML
}*/

let listItems = [];

// Create a new list item when clicking on the "Add" button

function takeInput(){
    var newTask = document.getElementById("task-input").value
    listItems.push(newTask)

    var tasksList = ""
    var arrayLength = listItems.length
    for (let i = 0; i < arrayLength; i++){
        tasksList += "<li>" + listItems[i] + "</li>"
    }
    document.getElementById("tasks").innerHTML = tasksList
} 