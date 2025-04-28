function addTask() {
  const taskInput = document.getElementById("new-task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");
  li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

  // Append the new task to the list
  document.getElementById("task-list").appendChild(li);

  // Clear the input field
  taskInput.value = "";
}

function removeTask(button) {
  // Remove the task list item
  button.parentElement.remove();
}
