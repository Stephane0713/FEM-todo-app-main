class Task {
    constructor(
        public text: string,
        readonly id: string,
        public status: 'active' | 'done' = 'active'
    ){}
}

class TaskApp {
    constructor(
        private list: HTMLUListElement,
        public tasks: Task[] = [],
        public tab: 'all' | 'active' | 'done' = 'all'
    ) {}

    add(task: Task): void {
        this.tasks.push(task)
    }

    show(): void {
        let arr = this.tasks
        if(this.tab !== 'all') {
            arr = this.tasks.filter(task => task.status === this.tab)
        }
        for(let task of arr) {
            this.render(task)
        }
    }

    render(task: Task): void {
        const li = document.createElement('li')
        li.classList.add('todo-app__item')
        
        const div = document.createElement('div')
        if(task.status === "done") div.classList.add('done')
        div.classList.add('todo-app__task')
        div.id = task.id
        div.textContent = task.text
        li.append(div)

        const btn = document.createElement('button')
        btn.classList.add('todo-app__close')
        li.append(btn)

        this.list.append(li)
    }

    clear(): void {
        this.list.innerHTML = ""
    }

    completeTask(task: Task): void {
        task.status = 'done'
    }

    activeTask(task: Task): void {
        task.status = 'active'
    }
}

export {Task, TaskApp}