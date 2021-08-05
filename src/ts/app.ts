import { Task, TaskApp } from './todo-app'

const list = document.querySelector(".todo-app__list") as HTMLUListElement

const task1 = new Task('this is a test 1', '0')
const task2 = new Task('this is a test 2', '1', 'done')
const app = new TaskApp(list, [task1, task2])
app.show()

list.addEventListener('click', (e: Event) => {
    console.log((e.target as HTMLDivElement).id)
})
