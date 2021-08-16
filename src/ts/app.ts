import { State, Task, TaskApp } from "./todo-app";

const form = document.querySelector(".todo-app__form") as HTMLFormElement;
const tabs = document.querySelector(".todo-app__tabs") as HTMLElement;
const list = document.querySelector(".todo-app__list") as HTMLUListElement;
const taskCounter = document.querySelector(".todo-app__counter") as HTMLElement;
const clear = document.querySelector(".todo-app__clear") as HTMLElement;

const app = new TaskApp(list, taskCounter);
app.load();

list.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLDivElement;
    const task = target.parentElement;

    if (task.dataset.index) {
        const index: number = parseInt(task.dataset.index);
        if (target.classList.contains("todo-app__close")) {
            app.removeTask(index);
        } else {
            app.tasks[index].toggleState();
        }
        app.load();
    }
});

tabs.addEventListener("click", (e: Event) => {
    const tab = e.target as HTMLElement;

    if (tab.id) {
        tabs.querySelector(".active").classList.remove("active");

        const id = tab.id as State;
        app.changeState(id);
        tab.classList.add("active");
        app.load();
    }
});

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const input = form.querySelector("input");
    const task = new Task(input.value);
    app.add(task);
    app.load();
});

clear.addEventListener("click", () => {
    app.clearCompleted();
    app.load();
});
