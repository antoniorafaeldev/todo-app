import { toggleTheme } from "./theme.js";
import { createTask } from "./taskCreate.js";
import { markOffTask } from "./markOff.js";
import { clearCompletedTasks } from "./clearTasks.js";
import { showAllTasks } from "./showTasks.js";
import { showActiveTasks } from "./showTasks.js";
import { showCompletedTasks } from "./showTasks.js";

let todoTasks = 0;
let completedTasks = 0;
const itemsLeftCount = document.getElementById("items-left-count");

const clearCompletedBtn = document.getElementById("clear-completed-btn");

const themeToggleBtn = document.getElementById("theme-toggle");

const showAllBtn = document.getElementById("show-all-btn");
const showActiveBtn = document.getElementById("show-active-btn");
const showCompletedBtn = document.getElementById("show-completed-btn");

themeToggleBtn.addEventListener("click", toggleTheme);

const tasksContainer = document.getElementById("tasks-container");
const todoTextInput = document.getElementById("todo-input");
const todoCreateCheckbox = document.getElementById("todo-create-input");

tasksContainer.addEventListener("change", (event) => {
  if (event.target.matches(".todo-checkbox-markoff")) {
    markOffTask(event.target.closest(".task-container"));

    event.target.checked ? completedTasks++ : completedTasks--;

    todoTasks =
      document.querySelectorAll(".task-container").length - completedTasks;
    itemsLeftCount.textContent = todoTasks;
    console.log(
      `Tarefas concluídas: ${completedTasks} / ${document.querySelectorAll(".task-container").length}. Tarefas pendentes: ${todoTasks}`,
    );
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
  if (event.key === "Enter" && todoTextInput.value.trim() !== "") {
    createTaskFromInput();
    todoTasks++;
    itemsLeftCount.textContent = todoTasks;
    console.log(`Tarefas criadas: ${todoTasks}`);
  }
});

todoCreateCheckbox.addEventListener("change", () => {
  if (todoCreateCheckbox.checked) {
    createTaskFromInput();
    todoCreateCheckbox.checked = false;
    todoTasks++;
    itemsLeftCount.textContent = todoTasks;
    console.log(`Tarefas criadas: ${todoTasks}`);
  }
});

clearCompletedBtn.addEventListener("click", () => {
  clearCompletedTasks();
  completedTasks = 0;
  todoTasks =
    document.querySelectorAll(".task-container").length - completedTasks;
  itemsLeftCount.textContent = todoTasks;
});

showAllBtn.addEventListener("click", () => {
  showAllTasks();
  showAllBtn.classList.add("filters__btn--active");
  showActiveBtn.classList.remove("filters__btn--active");
  showCompletedBtn.classList.remove("filters__btn--active");
});

showActiveBtn.addEventListener("click", () => {
  showActiveTasks();
  showActiveBtn.classList.add("filters__btn--active");
  showAllBtn.classList.remove("filters__btn--active");
  showCompletedBtn.classList.remove("filters__btn--active");
});

showCompletedBtn.addEventListener("click", () => {
  showCompletedTasks();
  showCompletedBtn.classList.add("filters__btn--active");
  showAllBtn.classList.remove("filters__btn--active");
  showActiveBtn.classList.remove("filters__btn--active");
});
