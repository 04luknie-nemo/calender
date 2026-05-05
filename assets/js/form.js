import { removeTodo } from "./remove-todo.js";

export const todoList = [];
const showForumButton = document.getElementById("show-forum-button");
showForumButton.addEventListener("click", displayForum);

function displayForum() {
  const form = document.getElementById("addTodoForm");
  form.classList.toggle("hidden");
  const icon = document.getElementById("show-forum-icon");
  icon.setAttribute(
    "data-lucide",
    form.classList.contains("hidden") ? "plus" : "minus",
  );
  lucide.createIcons({ nodes: [icon] });
}
export function renderTodoList(todoList) {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";
  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.description;

    const button = document.createElement("button");
    button.textContent = "Ta bort";
    button.onclick = () => removeTodo(index);

    li.appendChild(button);
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.width = "100%";
    li.style.alignItems = "center";

    button.style.marginLeft = "auto";
    button.style.padding = "0.35rem 0.8rem";
    button.style.borderRadius = "10rem";
    button.style.border = "0.1rem solid #6a2430";
    button.style.background =
      "linear-gradient(to top, #ff9a9e 0%, #fecfef 100%)";
    button.style.color = "#2e0f14";
    button.style.fontWeight = "700";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0 0.2rem 0.6rem rgba(0, 0, 0, 0.2)";
    button.style.transition = "transform 0.15s ease, filter 0.15s ease";

    button.addEventListener("mouseenter", () => {
      button.style.filter = "brightness(1.05)";
      button.style.transform = "translateY(-1px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.filter = "none";
      button.style.transform = "translateY(0)";
    });

    button.addEventListener("mousedown", () => {
      button.style.transform = "translateY(1px)";
    });

    button.addEventListener("mouseup", () => {
      button.style.transform = "translateY(-1px)";
    });

    list.appendChild(li);
  });
}
