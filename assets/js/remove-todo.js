function removeTodo(index) {
    todoList.splice(index, 1);
    renderTodoList(todoList);
}