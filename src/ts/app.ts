import { Task, TaskApp } from "./todo-app";

const input = document.querySelector(".todo-app__input") as HTMLInputElement;
const tabs = document.querySelector(".todo-app__tabs") as HTMLElement;
const list = document.querySelector(".todo-app__list") as HTMLUListElement;

const task1 = new Task("this is a test 1");
const task2 = new Task("this is a test 2", "done");
const app = new TaskApp(list, [task1, task2]);
app.load();

list.addEventListener("click", (e: Event) => {
    const task = (e.target as HTMLDivElement).parentElement;

    if (task.dataset.index) {
        const index: number = parseInt(task.dataset.index);
        app.tasks[index].toggleState();
        app.load();
    }
});

tabs.addEventListener("click", (e: Event) => {
    const tab = e.target as HTMLElement;

    if (tab.id) {
        const id = tab.id as "all" | "active" | "done";
        app.state = id;
        app.load();
    }
});
