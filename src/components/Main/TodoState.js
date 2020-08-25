import { createStore } from 'redux';
import { todoData } from '../../services/todo-data';

const todoReducer = (state = todoData, action) => {
    switch (action.type) {
        case 'SAVE':
            if (action.todoItem.id) {
                return editTodoItem(state, action.todoItem)
            } else {
                return [state, action.todoItem];
            }
        default:
            return state
    }
};

const editTodoItem = (state, newTodoItem) => {
    return state.map(todoItem => {
        if (todoItem.id === newTodoItem.id) {
            return newTodoItem;
        } else {
            return todoItem;
        }
    });
}

export const saveTodoItem = (todoItem) => ({
    type: 'SAVE',
    todoItem
});

export const todoStore = () => createStore(todoReducer);


