// events.js
let tasks = []; // Initialize an empty array to store tasks

function renderTasks(tasks) {
  // get the list element from the DOM
  const todoList = document.getElementById("todoList");
  
  // clear the existing list before rendering new tasks
  todoList.innerHTML = "";
  
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
  tasks.forEach((task) => {
    const taskElement = document.createElement("li"); // Create a new list item for each task
    taskElement.classList.toggle("strike", task.completed); // Strike-through if completed

    taskElement.innerHTML = `
      <p>${task.detail}</p> <!-- Display task detail -->
      <div>
        <span data-action="delete">❎</span> <!-- Delete icon -->
        <span data-action="complete">✅</span> <!-- Complete icon -->
      </div>
    `;
    
    todoList.appendChild(taskElement); // Add the task to the list in the DOM
  });
}

function newTask() {
  // get the value entered into the #todo input
  const taskDetail = document.getElementById("todo").value; // Retrieve input value

  // add it to our tasks array
  tasks.push({ detail: taskDetail, completed: false }); // Add new task object to the array

  // render out the list
  renderTasks(tasks); // Update the displayed task list

  // Optionally, clear the input field after submission
  document.getElementById("todo").value = ''; // Clear input field
}

function removeTask(taskElement) {
  // Use Array.filter to remove the element from our task array
  tasks = tasks.filter((task) => task.detail !== taskElement.querySelector('p').innerText); // Filter out the deleted task from the array

  // This line removes the HTML element from the DOM
  taskElement.remove(); // Remove task from DOM
}

function completeTask(taskElement) {
  // Find the index of the task by matching the task detail
  const taskIndex = tasks.findIndex((task) => task.detail === taskElement.querySelector('p').innerText); // Find the task by its detail
  
  // Toggle the completed field of the task
  tasks[taskIndex].completed = !tasks[taskIndex].completed; // Flip the completed status

  // Toggle the strike-through class based on the completed status
  taskElement.classList.toggle("strike"); // Apply/remove "strike" class to task element

  console.log(tasks); // Logging the tasks array to see the updated status
}

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target); // Log the element that was clicked
  console.log(event.currentTarget); // Log the element the listener is attached to

  // Check if the click is on the delete or complete icon
  const action = event.target.dataset.action; // Get the action from the clicked icon's data-action attribute

  // Find the parent <li> of the clicked icon
  const taskElement = event.target.closest("li"); // Find the closest <li> element

  if (action === "delete") {
    // If delete icon was clicked, call removeTask
    removeTask(taskElement); // Remove the task
  } else if (action === "complete") {
    // If complete icon was clicked, call completeTask
    completeTask(taskElement); // Mark the task as complete/incomplete
  }
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
document.getElementById("submitTask").addEventListener("click", newTask); // Add event listener to submit button to create a new task
document.getElementById("todoList").addEventListener("click", manageTasks); // Add event listener to the task list to manage delete/complete actions