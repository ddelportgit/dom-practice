// Task 1

const heading = document.getElementById("heading");
const description = document.querySelector(".description");
const changeBtn = document.getElementById("changeBtn");
const input = document.getElementById("nameInput");
const output = document.getElementById("output");
const taskList = document.getElementById("taskList");

// Task 2

heading.textContent = "JavaScript DOM Mastery";

// Task 3

heading.classList.add("highlight");

// Task 4

changeBtn.addEventListener("click", () => {
  heading.textContent = "You clicked the button!";
});

// Task 5

input.addEventListener("input", () => {
  output.textContent = `Hello, ${input.value}!`;
});

// Task 6

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.textContent = "New task";
  taskList.appendChild(newListItem);
});

// Task 7 & 8

taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
    e.target.remove();
  }
});
