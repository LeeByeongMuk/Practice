function addTodo({title, priority}) {
  return {type: 'todo/ADD', title, priority};
}

function removeTodo({id}) {
  return {type: 'todo/REMOVE', id};
}

function removeAllTodo() {
  return {type: 'todo/REMOVE_ALL'};
}

store.dispatch(addTodo({title: 'asd', priority: 'high'}));
store.dispatch(addTremoveTodoodo({id: 1}));
store.dispatch(removeAllTodo());