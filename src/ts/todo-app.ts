class Task {
    constructor(public text: string){}
}

class TaskUI {
    constructor(private list: HTMLUListElement) {
        this.list = list;
    }
    private counter: number = 0;

    private generateID(): string {
        this.counter++
        return `id-${this.counter}`
    }

    add(task: Task): void {
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
}

const list = document.querySelector(".todo-app__list") as HTMLUListElement

const task = new Task('this is a test')
const ui = new TaskUI(list)

ui.add(task)
ui.add(task)
ui.add(task)
ui.add(task)
ui.add(task)