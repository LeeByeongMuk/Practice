function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {id: 'asd'}
        ]
      };
  }
}

const INITIAL_STATE = {todos: []};