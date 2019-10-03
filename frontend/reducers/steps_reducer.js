import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions';

const initialState = {
    1: {
        id: 1,
        title: 'fill buckets with warm water',
        done: false,
        todoId: 1
    },
    2: {
        id: 2,
        title: 'calm down dog',
        done: false,
        todoId: 2
    }
}


const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_STEP:
            let oldState = Object.assign({}, state);
            let newStep = action.step;
            oldState[newStep.id] = newStep;
            return oldState;

        case RECEIVE_STEPS:
            return state;


        case REMOVE_STEP:
            let copy = Object.assign({}, state)
            delete copy[action.stepId]
            return copy;
        default: return state;
    }
}


export default stepsReducer;