const todoList = [];
const showForum = document.getElementById("show-forum-button");
showForum.addEventListener("click", displayForum);

function displayForum() {
  document.getElementById("addTodoForm").classList.toggle("hidden")
}
function renderTodoList(todoList) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.description;
    const button = document.createElement("button");
    button.textContent = "Ta bort";
    button.onclick = () => removeTodo(index);
    li.appendChild(button);
    list.appendChild(li);    
  });
}