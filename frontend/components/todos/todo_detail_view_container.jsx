import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';


// const mapStateToProps = state => {
//     return {
//         todos: allTodos(state)
//     }
// }

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoId => dispatch(deleteTodo(todoId))
});


export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView); 
