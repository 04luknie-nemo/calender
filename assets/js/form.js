// Antingen ha addingTodo i addTodo ELLER hämta description och date i addingTodo
const todoList = [];
function addTodo(todo) {
  const addTodoForm = document.getElementById("addTodoForm");

  const fieldSet = document.getElementById("addTodo");

  const button = document.getElementById("submitButton");
  addTodoForm.addEventListener("submit", addingTodo);
}

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
  console.log(description.value);
  console.log(todoDate);

  todoList.push(todoObject);
  renderTodoList(todoList);
  console.log(todoList);
}

function renderTodoList(todoList) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todoList.forEach((todo) => {
    const p = document.createElement("p");
    p.textContent = todo.description;
    document.getElementById("todo-list").appendChild(p);
  });
}
