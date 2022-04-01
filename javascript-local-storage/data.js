/* exported todos */

var todos = [];

const previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', function (event) {
  const todosJSON = JSON.stringify(todos);
  this.localStorage.setItem('javascript-local-storage', todosJSON);
});
