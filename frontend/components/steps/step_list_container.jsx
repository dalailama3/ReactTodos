import { connect } from 'react-redux';
import { receiveStep } from '../../actions/step_actions';
import StepList from './step_list';

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step))
});

const mapStateToProps = state => {
    return {
        steps: state.steps,
        todoId: null
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(StepList);