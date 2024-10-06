import './styles.css';
import { modalLogicTodo, modalLogicProject, addTodoToList, renderTodos, clearDOM } from './domLogic.js';

/**dom logic */
/**/modalLogicTodo();
/**/modalLogicProject();

/**get todo and project data*/
/**/addTodoToList();
clearDOM(".content");
renderTodos();