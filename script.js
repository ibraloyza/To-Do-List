const todo_form = document.querySelector('form');
const todo_input = document.getElementById('todo-input');
const todo_listUl = document.getElementById('todo-list');

const all_todos= [];
console.log(all_todos);


todo_form.addEventListener('submit', function(e){
  e.preventDefault();
  addTodo();
})

function addTodo(){
  const todoText = todo_input.value.trim();
  if (todoText.length > 0) {
    all_todos.push(todoText);
    createTodoItem(todoText);
    todo_input.value = "";
  }
}

function updateTodoList(){
  todo_listUl.innerHTML ="";
  all_todos.forEach((todo,todoIndex)=>{
      todoItem = createTodoItem(todo,todoIndex);
      todo_listUl.append(todoItem);
  })
}




