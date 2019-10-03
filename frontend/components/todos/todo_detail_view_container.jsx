import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view';
import { receiveSteps } from '../../actions/step_actions'


// const mapStateToProps = state => {
//     return {
//         todos: allTodos(state)
//     }
// }

const mapDispatchToProps = dispatch => ({
    deleteTodo: todoId => dispatch(deleteTodo(todoId)),
    receiveSteps: steps => dispatch(receiveSteps(steps))
});


export default connect(
    null,
    mapDispatchToProps
)(TodoDetailView);
