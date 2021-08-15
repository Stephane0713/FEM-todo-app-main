class Task {
    constructor(
        public text: string,
        public state: "active" | "done" = "active"
    ) {}

    toggleState(): void {
        this.state = this.state === "active" ? "done" : "active";
    }
}

class TaskApp {
    constructor(
        private list: HTMLUListElement,
        public tasks: Task[] = [],
        public state: "all" | "active" | "done" = "all"
    ) {}

    add(task: Task): void {
        this.tasks.push(task);
    }

    removeTask(taskIndex): void {
        this.tasks.splice(taskIndex, 1);
    }

    render(task: Task): void {
        const taskIndex: string = this.tasks.indexOf(task).toString();
        const li = document.createElement("li");
        li.classList.add("todo-app__item");
        li.dataset.index = taskIndex;

        const div = document.createElement("div");
        if (task.state === "done") div.classList.add("done");
        div.classList.add("todo-app__task");
        div.textContent = task.text;
        li.append(div);

        const btn = document.createElement("button");
        btn.classList.add("todo-app__close");
        li.append(btn);

        this.list.append(li);
    }

    load(): void {
        this.list.innerHTML = "";
        let filteredTasks: Task[] = this.tasks;
        if (this.state !== "all") {
            filteredTasks = this.tasks.filter(
                (task) => task.state === this.state
            );
        }
        for (let task of filteredTasks) {
            this.render(task);
        }
    }
}

export { Task, TaskApp };
