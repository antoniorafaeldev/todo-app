
export class Task {
  constructor(name, id, completed = false) {
    this.name = name;
    this.id = id;

    this.completed = completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

export function createTask(taskName, taskId) {
  const task = new Task(taskName, taskId);

  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");
  taskContainer.setAttribute("data-id", taskId);

  const label = createLabel();
  const checkboxBox = createCheckboxBox();
  const checkboxInput = createCheckboxInput(task);
  const checkboxLabel = createCheckboxLabel(taskName);

  checkboxInput.checked = task.completed;

  taskContainer.appendChild(label);

  label.appendChild(checkboxInput);
  label.appendChild(checkboxBox);
  label.appendChild(checkboxLabel);

  return taskContainer;
}

function createLabel() {
  const label = document.createElement("label");
  label.classList.add("todo-checkbox");

  return label;
}

function createCheckboxBox() {
  const checkboxBox = document.createElement("span");
  checkboxBox.classList.add("todo-checkbox__box");
  checkboxBox.setAttribute("aria-hidden", "true");
  return checkboxBox;
}

function createCheckboxInput(task) {
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("todo-checkbox__input", "todo-checkbox-markoff");
  checkboxInput.addEventListener("change", () => {
    task.toggleCompleted();
  });

  return checkboxInput;
}

function createCheckboxLabel(taskName) {
  const checkboxLabel = document.createElement("span");

  checkboxLabel.classList.add("todo-checkbox__label");
  checkboxLabel.textContent = taskName;

  return checkboxLabel;
}
