import _ from 'lodash';
import './style.css';

const todo = [
  {
    description: "code for 2 hours",
    completed: true,
    index: 1
  },
  {
    description: "workout for 30 mins",
    completed: false,
    index: 2
  },
  {
    description: "eat breakfast",
    completed: true,
    index: 3
  }
];

const todoList = document.querySelector(".todo-list");

const displayTodoList = () => {
  todo.map(todoItem => {
    todoList.innerHTML += `<li class='todo-item' data-id=${todoItem.index}>
      <form>
        <input type='checkbox' class='todo-item-checkbox' value='${todoItem.description}'>
        <span type='text' contentEditable=true class='todo-item-input' data-content=${todoItem.description}>
        ${todoItem.description}
        </span>
      </form>
    </li>`
  })
}

displayTodoList();