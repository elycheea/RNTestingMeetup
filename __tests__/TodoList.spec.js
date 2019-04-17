import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('displays passed-in todos', () => {
    const mockTodos = ['Buy milk', 'Feed dog'];
    const { queryByText } = render(<TodoList todos={ mockTodos }/>);

    mockTodos.forEach((todo) => {
      expect(queryByText(todo)).not.toBeNull();
    });
  });

  describe('adding a todo', () => {
    let getByTestId;

    beforeEach(() => {
      ({ getByTestId } = render(<TodoList/>));
      fireEvent.changeText(getByTestId('todoName'), 'Do laundry');
      fireEvent.press(getByTestId('addTodoButton'));
    });

    it('displays the new todo', () => {
    });

    it('clears the text field', () => {
      expect(getByTestId('todoName').props.value).toEqual('');
    });
  });

  it('allows deleting a todo', () => {
    const { getByTestId, queryByText } = render(<TodoList todos={['Do laundry']}/>);

    fireEvent.press(getByTestId('deleteTodoButton'));
    expect(queryByText('Do laundry')).toBeNull();
  });
});
