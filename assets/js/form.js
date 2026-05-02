const todoList = [];
const showForum = document.getElementById("show-forum-button");
showForum.addEventListener("click", displayForum);

function displayForum() {
  document.getElementById("addTodoForm").classList.toggle("hidden")
}
function renderTodoList(todoList) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todoList.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.description;
    list.appendChild(li);
  });
}