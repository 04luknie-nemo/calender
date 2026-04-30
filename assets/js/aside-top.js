export function initClock() {
  const nu = new Date();
  setInterval((nu = new Date()) => {
    clock(nu);
  }, 1000);

  weekday(nu);
  month(nu);

  function clock(nu) {
    const timeString = nu.toLocaleTimeString("sv", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const element = document.getElementById("time");

    if (element) {
      element.textContent = timeString;
    }
    function weekday(nu) {
        const weekday = nu.toLocaleDateString("sv", {
            weekday: "long"
        });
        document.getElementById("weekday").textContent = weekday;
    }
    function month(nu) {
        const datum = nu.toLocaleDateString("sv", {
            month: "long",
            day: "numeric",
            year: "numeric",
        });
        document.getElementById("datum").textContent = datum;
    }

    addTodo();
    const todoList = [];
    
    
    // Antingen ha addingTodo i addTodo ELLER hämta description och date i addingTodo
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
            date: todoDate
        }
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
        })
    }
}
