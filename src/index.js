/* eslint-disable */
import './style.css';
import { clearAll, markCompleted } from './clear';
import renderTodo from './crud';

const listsEl = document.querySelector('.lists');
const btnClearEl = document.querySelector('.btn-clear');

window.addEventListener('load', renderTodo);

listsEl.addEventListener('change', markCompleted);
btnClearEl.addEventListener('click', () => {
  clearAll();
  renderTodo();
});
