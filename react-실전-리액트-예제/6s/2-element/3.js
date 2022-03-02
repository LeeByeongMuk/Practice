export const ADD = 'todo/ADD';
export const REMOVE = 'todo/REMOVE';
export const REMOVE_ALL = 'todo/REMOVE_ALL';

export function addTodo({title, priority}) {
  return {type: ADD, title, priority};
}

export function removeTodo({id}) {
  return {type: REMOVE, id};
}

export function removeAllTodo() {
  return {type: REMOVE_ALL};
}

store.dispatch(addTodo({title: 'asd', priority: 'high'}));
store.dispatch(addTremoveTodoodo({id: 1}));
store.dispatch(removeAllTodo());