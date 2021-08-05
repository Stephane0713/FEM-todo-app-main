class Task {
    constructor(
        public text: string,
        readonly id: number,
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
        div.classList.add('todo-app__task')
        div.textContent = task.text
        li.append(div)

        const btn = document.createElement('button')
        btn.classList.add('todo-app__close')
        li.append(btn)

        list.append(li)
    }

    clear(): void {
        this.list.innerHTML = ""
    }
}

const list = document.querySelector(".todo-app__list") as HTMLUListElement

const task1 = new Task('this is a test 1', 0)
const task2 = new Task('this is a test 2', 1, 'done')

const app = new TaskApp(list, [task1, task2])

app.show()