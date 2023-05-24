const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const rules = document.getElementById("rules");

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

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
  console.log(todoText);

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    // will mark the todo as completed
    todoEl.addEventListener("click", () =>
      todoEl.classList.toggle("completed")
    );

    // will delete the todo
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
    });

    todosUl.appendChild(todoEl);

    input.value = "";
  }
}
