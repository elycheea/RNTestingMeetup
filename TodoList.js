import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const without = (array, index) => (
  [...array.slice(0, index), ...array.slice(index+1)]
);

export default class TodoList extends Component {
  state = {
    todos: this.props.todos ? [...this.props.todos] : [],
    newTodoName: '',
  }

  handleChangeText = newTodoName => this.setState({ newTodoName });

  handleAddTodo = () => {
    if (this.state.newTodoName === '') {
      return;
    }

    this.setState(({ todos, newTodoName }) => ({
      todos: [...todos, newTodoName],
      newTodoName: '',
    }));
  }

  handleDeleteTodo = index => () => {
    let { todos } = this.state;
    this.setState({ todos: without(todos, index) });
  }

  render() {
    const { todos, newTodoName } = this.state;
    return (
      <View>
        <TextInput
          testID="todoName"
          value={newTodoName}
          onChangeText={this.handleChangeText}
          style={styles.input}
        />
        <Button
          testID="addTodoButton"
          title="Add"
          onPress={this.handleAddTodo}
        />
        {todos.map((todo, index) => (
          <View key={todo} style={styles.todoRow}>
            <Text>{todo}</Text>
            <Button
              testID="deleteTodoButton"
              title="Delete"
              onPress={this.handleDeleteTodo(index)}
            />
          </View>
        ))}
      </View>
    );
  }
}

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
