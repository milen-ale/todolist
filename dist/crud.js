"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["crud"],{

/***/ "./src/crudOps.js":
/*!************************!*\
  !*** ./src/crudOps.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo),
/* harmony export */   "editTodos": () => (/* binding */ editTodos)
/* harmony export */ });
class Store {
  // get todo items from local storage
  static getTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

  // add todo item to local storage
  static addTodo = (todo) => {
    const todos = this.getTodos();
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // update todos in local storage
  static updateTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // update todo index in local storage
  static updateIndex = (todos) => {
    let indexedTodo = [];
    todos.forEach((todo, todoIndex) => {
      todo.index = todoIndex;
      indexedTodo = [...indexedTodo, todo];
    });
    return indexedTodo;
  };

  // remove todo item from local storage
  static deleteTodo = (ind) => {
    const todos = this.getTodos();
    const newTodos = todos.filter((todo) => todo.index !== ind);

    localStorage.setItem('todos', JSON.stringify(this.updateIndex(newTodos)));
  };
}

const displayTodo = () => {
  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  const todos = Store.getTodos();
  todos.forEach(({ description, completed, index }) => {
    const listItem = document.createElement('div');
    listItem.className = `row list-item list-item-${index}`;
    listItem.innerHTML = `
    <button class="check-box" data-ind="${index}">
      <span class="icon-check" data-completed="${completed}"></span>
      <i class="fa-solid fa-check" data-completed="${completed}"></i>
    </button>
    <input class="todo-item" type="text" data-todo="${index}" data-completed="${completed}" value='${description}' />
    <button class="delete" data-del="${index}" <svg
    width="25px"
    height="30px"
    class="icon-move"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="#b6b6b8"
    ></path>
  </svg></button>
    <svg
      width="25px"
      height="30px"
      class="icon-move"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="#b6b6b8"
      ></path>
    </svg>
  `;
    listContainer.appendChild(listItem);
  });
};

const createTodo = () => {
  // get todo description
  const description = document.querySelector('#new-todo').value;
  if (!description) return;

  // create new todo object
  const todo = {
    description: `${description}`,
    completed: false,
    index: Store.getTodos().length,
  };

  // add new todo to local storage
  Store.addTodo(todo);

  // add new todo to UI
  displayTodo();
};

const editTodos = (todoIndex, description) => {
  const todos = Store.getTodos();
  const todo = todos.find((todo) => todo.index === todoIndex);
  todo.description = description;

  Store.updateTodos(todos);
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/crudOps.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQsaURBQWlELFVBQVU7QUFDM0QscURBQXFELFVBQVU7QUFDL0Q7QUFDQSxzREFBc0QsTUFBTSxvQkFBb0IsVUFBVSxXQUFXLFlBQVk7QUFDakgsdUNBQXVDLE1BQU07QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NydWRPcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgLy8gZ2V0IHRvZG8gaXRlbXMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIHN0YXRpYyBnZXRUb2RvcyA9ICgpID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpIHx8IFtdO1xuXG4gIC8vIGFkZCB0b2RvIGl0ZW0gdG8gbG9jYWwgc3RvcmFnZVxuICBzdGF0aWMgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gIH07XG5cbiAgLy8gdXBkYXRlIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2VcbiAgc3RhdGljIHVwZGF0ZVRvZG9zID0gKHRvZG9zKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgfTtcblxuICAvLyB1cGRhdGUgdG9kbyBpbmRleCBpbiBsb2NhbCBzdG9yYWdlXG4gIHN0YXRpYyB1cGRhdGVJbmRleCA9ICh0b2RvcykgPT4ge1xuICAgIGxldCBpbmRleGVkVG9kbyA9IFtdO1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIHRvZG9JbmRleCkgPT4ge1xuICAgICAgdG9kby5pbmRleCA9IHRvZG9JbmRleDtcbiAgICAgIGluZGV4ZWRUb2RvID0gWy4uLmluZGV4ZWRUb2RvLCB0b2RvXTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5kZXhlZFRvZG87XG4gIH07XG5cbiAgLy8gcmVtb3ZlIHRvZG8gaXRlbSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgc3RhdGljIGRlbGV0ZVRvZG8gPSAoaW5kKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSB0aGlzLmdldFRvZG9zKCk7XG4gICAgY29uc3QgbmV3VG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHRvZG8uaW5kZXggIT09IGluZCk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnVwZGF0ZUluZGV4KG5ld1RvZG9zKSkpO1xuICB9O1xufVxuXG5jb25zdCBkaXNwbGF5VG9kbyA9ICgpID0+IHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRvZG9zKCk7XG4gIHRvZG9zLmZvckVhY2goKHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggfSkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gYHJvdyBsaXN0LWl0ZW0gbGlzdC1pdGVtLSR7aW5kZXh9YDtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNoZWNrLWJveFwiIGRhdGEtaW5kPVwiJHtpbmRleH1cIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1jaGVja1wiIGRhdGEtY29tcGxldGVkPVwiJHtjb21wbGV0ZWR9XCI+PC9zcGFuPlxuICAgICAgPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1jaGVja1wiIGRhdGEtY29tcGxldGVkPVwiJHtjb21wbGV0ZWR9XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICAgIDxpbnB1dCBjbGFzcz1cInRvZG8taXRlbVwiIHR5cGU9XCJ0ZXh0XCIgZGF0YS10b2RvPVwiJHtpbmRleH1cIiBkYXRhLWNvbXBsZXRlZD1cIiR7Y29tcGxldGVkfVwiIHZhbHVlPScke2Rlc2NyaXB0aW9ufScgLz5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCIgZGF0YS1kZWw9XCIke2luZGV4fVwiIDxzdmdcbiAgICB3aWR0aD1cIjI1cHhcIlxuICAgIGhlaWdodD1cIjMwcHhcIlxuICAgIGNsYXNzPVwiaWNvbi1tb3ZlXCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyIDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelwiXG4gICAgICBmaWxsPVwiI2I2YjZiOFwiXG4gICAgPjwvcGF0aD5cbiAgPC9zdmc+PC9idXR0b24+XG4gICAgPHN2Z1xuICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgIGhlaWdodD1cIjMwcHhcIlxuICAgICAgY2xhc3M9XCJpY29uLW1vdmVcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTEyIDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelwiXG4gICAgICAgIGZpbGw9XCIjYjZiNmI4XCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zdmc+XG4gIGA7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgLy8gZ2V0IHRvZG8gZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRvZG8nKS52YWx1ZTtcbiAgaWYgKCFkZXNjcmlwdGlvbikgcmV0dXJuO1xuXG4gIC8vIGNyZWF0ZSBuZXcgdG9kbyBvYmplY3RcbiAgY29uc3QgdG9kbyA9IHtcbiAgICBkZXNjcmlwdGlvbjogYCR7ZGVzY3JpcHRpb259YCxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiBTdG9yZS5nZXRUb2RvcygpLmxlbmd0aCxcbiAgfTtcblxuICAvLyBhZGQgbmV3IHRvZG8gdG8gbG9jYWwgc3RvcmFnZVxuICBTdG9yZS5hZGRUb2RvKHRvZG8pO1xuXG4gIC8vIGFkZCBuZXcgdG9kbyB0byBVSVxuICBkaXNwbGF5VG9kbygpO1xufTtcblxuY29uc3QgZWRpdFRvZG9zID0gKHRvZG9JbmRleCwgZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUb2RvcygpO1xuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gdG9kb0luZGV4KTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXG4gIFN0b3JlLnVwZGF0ZVRvZG9zKHRvZG9zKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlUb2RvLCBjcmVhdGVUb2RvLCBlZGl0VG9kb3MgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==