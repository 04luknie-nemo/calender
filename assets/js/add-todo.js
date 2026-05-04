import { todoList, renderTodoList } from "./form.js";

document.getElementById("addTodoForm").addEventListener("submit", addingTodo);

function addingTodo(event) {
  event.preventDefault();
  const description = document.getElementById("description");
  const todoDate = new Date(document.getElementById("dateToDo").value);
  const nu = new Date();

  todoDate.setHours(0, 0, 0, 0);
  nu.setHours(0, 0, 0, 0);

  if (nu > todoDate) {
    console.error("För tidigt datum");
    return;
  }
  const todoObject = {
    description: description.value,
    date: todoDate,
  };

  const addTodoForm = document.getElementById("addTodoForm");

  todoList.push(todoObject);
  renderTodoList(todoList);
  window.dispatchEvent(new Event("todos-updated"));
  addTodoForm.classList.toggle("hidden");
  const icon = document.getElementById("show-forum-icon");
  icon.setAttribute("data-lucide", "plus");
  lucide.createIcons({ nodes: [icon] });
  event.target.reset();
}
