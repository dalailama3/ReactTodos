
const allTodos = (state) => {
    const todosArr = Object.keys(state.todos).map(id => {
        return state.todos[id]
    })
    return todosArr;
} 



export default allTodos;