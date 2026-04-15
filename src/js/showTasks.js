/*
Objetivo - Criar 3 funções:
1 -A primeira mostra todas as tarefas
2 - A segunda mostra apenas as tarefas ativas
3 - A terceira mostra apenas as tarefas concluídas.

1 a) Remove hidden de tudo
b ) Antes, é preciso selecionar todos os task-container (tarefas) 
2 a) Essa função coloca a classe hidden em quem tem a classe completed, e remove a classe hidden de quem não tem a classe completed. 
3 a) Essa função coloca a classe hidden em quem não tem a classe completed, e remove a classe hidden de quem tem a classe completed.

bonus: esqueci de aplicar os estilos de cor nos botões.Só precisa adicionar a classe filters__btn--active no botão clicado, e remover essa classe dos outros dois botões.
*/




export function showAllTasks() {
    const tasks = document.querySelectorAll(".task-container");

    tasks.forEach(task => {
        task.classList.remove("hidden");
    });
}

export function showActiveTasks() {
    const tasks = document.querySelectorAll(".task-container");

    tasks.forEach(task => {

        task.classList.contains("completed") ? task.classList.add("hidden") : task.classList.remove("hidden");

    });
}

export function showCompletedTasks() {
    const tasks = document.querySelectorAll(".task-container");

    tasks.forEach(task => {

        task.classList.contains("completed") ? task.classList.remove("hidden") : task.classList.add("hidden");

    });
}