import { toggleTheme } from "./theme.js";
import { createTask } from "./taskCreate.js";

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", toggleTheme);

const tasksContainer = document.getElementById("tasks-container");
const todoTextInput = document.getElementById("todo-input");
const todoCreateCheckbox = document.getElementById("todo-create-input");

console.log(todoTextInput);
console.log(todoCreateCheckbox);



todoTextInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && todoTextInput.value.trim() !== "") {
    const taskName = todoTextInput.value.trim();
    const taskId = Date.now().toString();
    const taskElement = createTask(taskName, taskId);

    tasksContainer.prepend(taskElement);
    todoTextInput.value = "";
    todoCreateCheckbox.checked = false;

    return console.log(taskElement);
  }
}); 
