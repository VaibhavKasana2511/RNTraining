import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddTodo,
  deleteTodo,
  updateTodo,
} from '../../redux/actions/todoActions/todoAction';
import {styles} from './TodoStyles';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
const Todo = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.todoReducer.todos);
  // console.log(data);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(AddTodo(newTodo));
      setNewTodo('');
    }
  };
  const removeTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handleUpdateTodo = () => {
    if (editingTodo && updatedText.trim() !== '') {
      console.log(editingTodo);
      console.log(updatedText);
      dispatch(updateTodo(editingTodo.id, updatedText));
      setEditingTodo(null);
      setUpdatedText('');
    }
  };
  return (
    <View>
      <View>
        <TextInput
          placeholder="Add a new Todo"
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          onSubmitEditing={addTodo}
        />
        <Button onPress={addTodo} title="Add Todo" />
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            {editingTodo?.id === item.id ? (
              <View>
                <TextInput
                  value={updatedText}
                  onChangeText={text => setUpdatedText(text)}
                  placeholder="Update Todo"
                />
                <Button title="Update" onPress={handleUpdateTodo} />
              </View>
            ) : (
              <View>
                <Text>{item.text}</Text>
                <Button title="Edit" onPress={() => setEditingTodo(item)} />
                <Button title="Remove" onPress={() => removeTodo(item.id)} />
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
};
export default Todo;
