import { toggleTheme } from "./theme.js";
import { createTask } from "./taskCreate.js";
import { markOffTask } from "./markOff.js";

const todoTaks = []
const completedTasks = []

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", toggleTheme);

const tasksContainer = document.getElementById("tasks-container");
const todoTextInput = document.getElementById("todo-input");
const todoCreateCheckbox = document.getElementById("todo-create-input");


tasksContainer.addEventListener("change", (event) => {
  if (event.target.matches(".todo-checkbox-markoff")) {
    markOffTask(event.target.closest(".task-container"));
  }
});

function createTaskFromInput() {
  const value = todoTextInput.value.trim();
  if (value === "") return null;

  const taskName = value;
  const taskId = Date.now().toString();
  const taskElement = createTask(taskName, taskId);

  tasksContainer.prepend(taskElement);
  todoTextInput.value = "";

  return taskElement;
}

todoTextInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    createTaskFromInput();
  }
});

todoCreateCheckbox.addEventListener("change", () => {
  if (todoCreateCheckbox.checked) {
    createTaskFromInput();
    todoCreateCheckbox.checked = false;
  }
});


