const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

// Basically how lS (Browser API) works:
// You give it a Key and a string(if it is an OBJ... you need to use JSON.stringify)
// localStorage.setItem("name", JSON.stringify(obj));

// When you pull it out of lS and it is stringified, then you need to put it in JSON.parse()
// JSON.parse(localStorage.getItem(obj));
// LocalStorage
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

// Rules and button event
rulesBtn.addEventListener("click", () => rules.classList.add("show"));
closeBtn.addEventListener("click", () => rules.classList.remove("show"));

// TODO's
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  // showing the value you are typing in the form
  // console.log(todoText);

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    // will mark the todo as completed
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed"), updateLS();
    });

    // will delete the todo
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

    todosUl.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
