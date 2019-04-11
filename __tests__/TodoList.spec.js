import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('displays passed-in todos', () => {
    const todoName = 'My Todo';
    const { queryByText } = render(<TodoList todos={[todoName]} />);

    expect(queryByText(todoName)).not.toBeNull();
  });

  describe('adding a todo', () => {
    const todoName = 'My Todo';

    let getByTestId;
    let queryByText;

    describe('when a name is entered', () => {
      beforeEach(() => {
        ({ getByTestId, queryByText } = render(<TodoList />));

        fireEvent.changeText(getByTestId('todoName'), todoName);
        fireEvent.press(getByTestId('addTodoButton'));
      });

      it('displays the new todo', () => {
        expect(queryByText(todoName)).not.toBeNull();
      });

      it('clears the text field', () => {
        expect(getByTestId('todoName').props.value).toEqual('');
      });
    });

    describe('when no name is entered', () => {
      it('does not display a row for the new todo', () => {
        const { getByTestId, queryByTestId } = render(<TodoList />);

        fireEvent.changeText(getByTestId('todoName'), '');
        fireEvent.press(getByTestId('addTodoButton'));

        expect(queryByTestId('deleteTodoButton')).toBeNull();
      });
    });
  });

  it('allows deleting a todo', () => {
    const todoName = 'My Todo';
    const { getByTestId, queryByText } = render(<TodoList todos={[todoName]} />);

    fireEvent.press(getByTestId('deleteTodoButton'));

    expect(queryByText(todoName)).toBeNull();
  });
});
