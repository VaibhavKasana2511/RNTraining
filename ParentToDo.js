import {
  View,
  Alert,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styleToDo';
import {NavigationContainer} from '@react-navigation/native';

function ParentToDo({navigation}) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddTask = () => {
    if (task)
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        if (editIndex < updatedTasks.length) {
          updatedTasks[editIndex].text = task;
          setTasks(updatedTasks);
          setTask('');
          setEditIndex(-1);
        }
      } else {
        setTasks([...tasks, {text: task, iscompleted: false}]);
        setTask('');
      }
    else {
      Alert.alert('Task cannot be Empty');
    }
  };

  const handleCompleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].iscompleted = !updatedTasks[index].iscompleted;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = index => {
    const taskToEdit = tasks[index];
    setTask(tasks[index].text);
    setEditIndex(index);
  };

  const renderItem = ({item, index}) => (
    <View style={styles.task}>
      <Text
        style={[
          styles.itemList,
          item.iscompleted && {
            fontStyle: 'italic',
            textDecorationLine: 'line-through',
            color: 'gray',
          },
        ]}>
        {item.text}
      </Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleCompleteTask(index)}>
          {/* // disabled={item.iscompleted} */}
          <Text
            style={[
              styles.completeButton,
              item.iscompleted
                ? {
                    // color: 'gray',
                    // borderWidth: 1,
                    // borderColor: 'gray',
                    // opacity: 0 ,
                    // borderRadius: 10,
                    // padding: 10,
                    // fontStyle: 'italic',
                  }
                : {
                    color: 'white',
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 10,
                    padding: 10,
                  },
            ]}>
            {item.iscompleted ? '' : 'Complete'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text
            style={[
              item.iscompleted
                ? {
                    // color: 'gray',
                    // borderWidth: 1,
                    // borderColor: 'gray',
                    // opacity: 0 ,
                    // borderRadius: 10,
                    // padding: 10,
                    // fontStyle: 'italic',
                  }
                : styles.editButton,
            ]}>
            {item.iscompleted ? '' : 'Edit'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteTask(index)}
          style={styles.deleteButton}>
          <Image source={require('./img/delete.png')}></Image>
          {/* <Text style={styles.deleteButton}>Del</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('./img/upBG.png')}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.Heading}>ToDo List</Text>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontStyle: 'italic',
                paddingVertical: 15,
              }}>
              Enter your tasks below...
            </Text>
          </View>

          <View style={styles.titleContainer}>
            <TextInput
              style={styles.titleBox}
              placeholder="Today's Task"
              value={task}
              onChangeText={text => setTask(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={{color: 'white', fontSize: 20}}>
                {editIndex !== -1 ? 'Update' : 'Add Task'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: '10%', width: '100%', flex: 1}}>
            <FlatList
              data={tasks}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ParentToDo;
