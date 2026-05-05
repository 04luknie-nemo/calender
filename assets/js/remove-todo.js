import { todoList, renderTodoList } from "./form.js";

export function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodoList(todoList);
    window.dispatchEvent(new Event("todos-updated"));
}
