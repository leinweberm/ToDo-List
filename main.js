const input = document.getElementById("input");
const addItem = document.getElementById("addItem");
const warning = document.getElementById("warningText");
const todoList = document.getElementById("todoList");
const todo = document.getElementsByTagName("li");
const deleteItem = document.getElementsByClassName("delete");
let data = {};

//RUN AFTER LOADING THE PAGE
window.addEventListener('load', () => {
   indexTodos();
});

//INDEX TODOS + addEventlistener for deleting todo
const indexTodos = () => {
   for(let i = 0; i < deleteItem.length; i++){
      const thisItem = deleteItem[i]
      deleteItem[i].addEventListener('click', (e) =>
      deleteTodo(thisItem))
   };
};
const deleteTodo = (item) => {
   item.parentElement.remove();
   indexTodos();
}

//ADDING TODO TO LIST
addItem.addEventListener('click', (e) => {
   textBoxValidate();
});

input.addEventListener('click', (e) => {
   warning.classList.remove('active');
});

const textBoxValidate = () => {
   if (input.value === "") {
      warning.classList.add('active');
   } else {
      acceptTodo();
   }
};

const acceptTodo = () => {
   data["text"] = input.value;
   createTodo();
};

const createTodo = () => {
   todoList.innerHTML += `
      <li class="todo"><span class="delete">-</span>${data.text}</li>
   `;
   input.value = "";
   indexTodos();
};