/*
Objetivo: Criar uma função que marque uma tarefa como concluída, e aplique seus estilos de tarefa concluída.
Passos:
1 - criar uma função que recebe a div (task-container) da tarefa a ser marcada como concluída.
2 - Alternar a classe "completed" na div da tarefa.

*/

export function markOffTask(task) {
    task.classList.toggle("completed");

    return task;
}