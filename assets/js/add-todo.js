import { todoList, renderTodoList } from "./form.js";
import { renderCalender } from "./calendar.js";

document.getElementById("addTodoForm").addEventListener("submit", addingTodo);

function addingTodo(event) {
  event.preventDefault();
  const description = document.getElementById("description");
  const todoDate = new Date(document.getElementById("dateToDo").value);
  const nu = new Date();

  if (nu > todoDate) {
    console.error("För tidigt datum");
    return;
  }
  const todoObject = {
    description: description.value,
    date: todoDate,
  };

  todoList.push(todoObject);
  renderTodoList(todoList);
  addTodoForm.classList.toggle("hidden");
  event.target.reset();
  renderCalender();
}