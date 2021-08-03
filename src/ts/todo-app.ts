class Task {
    constructor(
        public text: string,
        public done: boolean = false
    ){}
}

class TaskApp {
    constructor(
        private list: HTMLUListElement,
        public tasks: Task[] = []
    ) {}

    private counter: number = 0;
    private generateID(): string {
        this.counter++
        return `id-${this.counter}`
    }

    renderAll(): void {
        this.clear()
        for(let task of this.tasks) {
            this.render(task)
        }
    }

    renderActive(): void {
        this.clear()
        for(let task of this.tasks) {
            if(!task.done) {
                this.render(task)
            }
        }
    }

    renderDone(): void {
        this.clear()
        for(let task of this.tasks) {
            if(task.done) {
                this.render(task)
            }
        }
    }

    render(task: Task): void {
        const id = this.generateID()
        const li = document.createElement('li')
        li.classList.add('todo-app__item')

        const input = document.createElement('input')
        input.type = 'checkbox'
        input.classList.add('todo-app__checkbox')
        input.id = id
        li.append(input)

        const label = document.createElement('label')
        label.classList.add('todo-app__label')
        label.htmlFor = id
        label.textContent = task.text
        li.append(label)

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

const task1 = new Task('this is a test 1')
const task2 = new Task('this is a test 2', true)

const app = new TaskApp(list, [task1, task2])

app.renderAll()