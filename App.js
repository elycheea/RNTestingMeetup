import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TodoList from './TodoList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoList todos={['foo']}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
  },
});
