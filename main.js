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
        tasksHTML+= tasks[i] 3
        tasksHTML+= "</li>"
    }
    tasklistElement.innerHTML = tasksHTML
}*/

let listItems = [];

// Create a new list item when clicking on the "Add" button

function takeInput(){
    var newTask = document.getElementById('task-input').value
    listItems.push(newTask)

    var tasksList = ''
    var arrayLength = listItems.length
    for (let i = 0; i < arrayLength; i++){
        tasksList += '<label class="container"><input type="checkbox"><span class="checkmark"></span> <p>'+ listItems[i] +'</p> </label>'
    }
    document.getElementById('tasks').innerHTML = tasksList


};        


