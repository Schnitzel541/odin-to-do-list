import './createTodo.js';
import { createTodoObject } from './createTodo.js';

const renderTodo = () => {
    const todoObject = createTodoObject();
    console.log(todoObject);
}