
export function clearCompletedTasks() {
    const tasksContainer = document.getElementById("tasks-container");
    const completedTasks = document.querySelectorAll(".completed");

    completedTasks.forEach(task => {
        tasksContainer.removeChild(task);
    });
}