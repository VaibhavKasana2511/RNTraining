import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from '../actions/actionTypes';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case DELETE_TODO: {
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload,
      );
      return {
        ...state,
        todos: filteredTodos,
        // todos: state.todos.filter(task => task.id !== action.payload),
        // todos: handleDeleteTask(action.payload, state.todos),
      };
    }

    case UPDATE_TODO: {
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? {...todo, text: action.payload.newText}
          : todo,
      );
      return {...state, todos: updatedTodos};
    }

    case COMPLETE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {...todo, iscompleted: !todo.iscompleted}
            : todo,
        ),
      };
    }

    default:
      return state;
  }
};

const handleDeleteTask = (item, todos) => {
  const todoIndex = todos.indexOf(item);
  const updatedTasks = [...initialState.todos];
  updatedTasks.splice(todoIndex, 1);
  return todos;
};

export default todoReducer;
