import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const without = (array, index) => (
  [...array.slice(0, index), ...array.slice(index+1)]
);

const TodoList = ({ todos: initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos ? [...initialTodos] : []);
  const [newTodoName, setNewTodoName] = useState('');

  const handleAddTodo = () => {
    if (newTodoName === '') {
      return;
    }

    setTodos([...todos, newTodoName]);
    setNewTodoName('');
  };

  const handleDeleteTodo = index => () => {
    setTodos(without(todos, index));
  };

  return (
    <View>
      <TextInput
        testID="todoName"
        value={newTodoName}
        onChangeText={setNewTodoName}
        style={styles.input}
      />
      <Button
        testID="addTodoButton"
        title="Add"
        onPress={handleAddTodo}
      />
      {todos.map((todo, index) => (
        <View key={todo} style={styles.todoRow}>
          <Text>{todo}</Text>
          <Button
            testID="deleteTodoButton"
            title="Delete"
            onPress={handleDeleteTodo(index)}
          />
        </View>
      ))}
    </View>
  );
};

const styles = {
  input: {
    borderColor: '#999',
    borderWidth: 1,
    padding: 4,
  },
  todoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default TodoList;
