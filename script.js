const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const modeToggleIcon = document.getElementById('toggleModeButton');
const body = document.body;

// Function to create a new task item with fade-in animation
function createTaskItem(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <button class="deleteButton">Delete</button>
  `;
  taskList.appendChild(li);
  li.classList.add("fade-in"); // Add the fade-in class to trigger the animation
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTaskItem(taskText);
    taskInput.value = "";
  }
}

// Function to delete a task
function deleteTask(event) {
  const item = event.target.parentElement;
  taskList.removeChild(item);
}

function toggleLightMode() {
  const container = document.querySelector('.container');
  container.classList.toggle('light-mode');
  body.classList.toggle('light-mode');

  const logoImg = document.querySelector('.logo');
  logoImg.style.opacity = 0; // Set the opacity to 0 (fully transparent)

  const toggleModeButton = document.getElementById('toggleModeButton');
  toggleModeButton.style.opacity = 0; // Set the opacity to 0 (fully transparent)

  setTimeout(() => {
    if (body.classList.contains('light-mode')) {
      logoImg.src = 'assets/tdzlight-transformed.png'; // Light mode image source
      toggleModeButton.src = 'assets/moon.png'; // Sun icon image source
    } else {
      logoImg.src = 'assets/tdzdark-transformed.png'; // Dark mode image source
      toggleModeButton.src = 'assets/sun.png'; // Moon icon image source
    }
    logoImg.style.opacity = 1; // Set the opacity back to 1 (fully visible)
    toggleModeButton.style.opacity = 1; // Set the opacity back to 1 (fully visible)
  }, 150); // Adjust the delay as needed to match the transition duration (0.5s in this case)
}

// Event listener for the add button
addButton.addEventListener("click", addTask);

// Event listener for the toggle mode button
modeToggleIcon.addEventListener('click', toggleLightMode);

// Event listener for the delete button (using event delegation)
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("deleteButton")) {
    deleteTask(event);
  }
});
