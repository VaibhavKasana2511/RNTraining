import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/configureStore';
import Todo from './src/screens/Todo/Todo';
import ParentToDo from './ParentToDo';
import {PersistGate} from 'redux-persist/integration/react';

const reduxTodo = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ParentToDo />
      </PersistGate>
    </Provider>
  );
};
export default reduxTodo;
