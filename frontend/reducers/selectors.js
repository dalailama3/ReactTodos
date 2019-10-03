
export const allTodos = (state) => {
    const todosArr = Object.keys(state.todos).map(id => {
        return state.todos[id]
    })
    return todosArr;
} 

export const stepsByTodoId = (state, todoId) => {
    const stepsArr = Object.keys(state.steps).map(id => {
        let tId = state.steps[id].todoId;
        if (tId === todoId) {
            return state.steps[id]
        }
    })
    return stepsArr;
}



