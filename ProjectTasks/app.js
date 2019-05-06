//-----------------------------------------------

//Inicio 

const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const list = document.querySelector("ul");
form.addEventListener("submit", runEvent);

function runEvent(e) {

  newTask = document.createElement("li");
  newTask.setAttribute("class", "collection-item");
  newTask.innerHTML = `${taskInput.value} 
  <a href="#" class="delete-item secondary-content">
  <i class="fa fa-times" />
  </a>`;
  list.appendChild(newTask);
  console.log(newTask);
  document.getElementById("task").value = ""; 
  e.preventDefault();
}

const clearButton = document.querySelector(".clear-tasks");
clearButton.addEventListener("click", eventHandler);

function eventHandler(e) {
    console.log("Delete All!");
    let lis = document.querySelectorAll("li");
    lis.forEach(function(li) {
        li.remove();
    });
    e.preventDefault();
}

const bodyNode = document.body;
bodyNode.addEventListener("click", handleEvent);

function handleEvent(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("Delete Task!");

    e.target.parentElement.parentElement.remove();
  }
}

function filter() {
  
  let search = document.getElementById("filter");
  let collect = document.getElementsByClassName("collection-item");

  for (let i = 0; i < collect.length; i++) {
    const txtValue = collect[i].innerText;
    const temp = search.value;
    if(txtValue.indexOf(temp)> -1)
      collect[i].style.display = "list-item"; 
    else
      collect[i].style.display = "none";   
  }
}

addTask = document.querySelector("form");
inputTask = document.getElementById("task");

if (localStorage.taskList) {
  taskList = JSON.parse(localStorage.taskList);
} else {
  taskList = [];
}

addTask.addEventListener("submit", function(e) {
  taskList.push(inputTask.value);

  localStorage.setItem("taskList", JSON.stringify(taskList));

  e.preventDefault();
});

// Loop over each element

taskList.forEach(element => {
  console.log(element);
});

