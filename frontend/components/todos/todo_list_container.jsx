import { connect } from 'react-redux';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';
import { receiveTodo, deleteTodo } from '../../actions/todo_actions'



const mapStateToProps = state => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    deleteTodo: todoId => dispatch(deleteTodo(todoId))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList); 
