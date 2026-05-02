import { todoList } from './form.js';

export function countTodos() {
    const date = new Date();
    const amountTodos = todoList.filter(todos => {
        return date.getFullYear() === todos.date.getFullYear()
            && todos.date.getMonth() === date.getMonth()
            && date.getDate() === todos.date.getDate()

    })
    const plats = document.getElementById("count-todays-todos")
    plats.textContent = `Antal todos idag: ${amountTodos.length}`;
    console.log("Antal för idag:", amountTodos.length)
}