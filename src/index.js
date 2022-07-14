/* eslint-disable */
import './style.css';

const todoList = [
  {
    index: '1',
    description: 'cook my brakfast',
  },
  {
    index: '2',
    description: 'wash my deash',
  },
  {
    index: '3',
    description: 'complate to do list task ',
  },

  {
    index: '4',
    description: 'complate to do list task ',
  },
];

const newlist = document.querySelector('.list1');

newlist.innerHTML = todoList.map(
  (todo) => `
<li class="newlist1">
      <input id="${todo.index}" class="check" type="checkbox"/>
      <span class="text">${todo.description}</span>
      <button class="delete"><img src="https://e7.pngegg.com/pngimages/179/938/png-clipart-computer-icons-hamburger-button-dots-kebab-menu-text-rectangle-thumbnail.png"></button>
      </li>
    `
);
