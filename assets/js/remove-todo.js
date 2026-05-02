import { todoList, renderTodoList } from "./form.js";

export function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodoList(todoList);
}