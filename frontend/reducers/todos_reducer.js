import { RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';
window.receiveTodo = receiveTodo
window.receiveTodos = receiveTodos

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_TODOS:
            let nextState = {}
            action.todos.forEach(todo => {
                nextState[todo.id] = todo
            })
            return nextState;
        case RECEIVE_TODO: 
            let oldState = Object.assign({}, state)
            const newTodo = action.todo;
            oldState[newTodo.id] = newTodo;
            return oldState;
        default: return state;
    }
}



export default todosReducer;