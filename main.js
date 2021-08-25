let tasks = [];
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
}