import {
    GET_ALL_TODOS, 
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    TODOS_DELETED,
    CURRENT_TODO
} from '../Constants';
const initialState = {
   todos: [],
   currentTodo: {},
   tasksToDo: [],
   tasksInProgress: [],
   tasksDone: [],
   tasksDeleted: []
}

export default function todosReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case CREATE_TODO:
            return{
                ...state,
                todos: state.todos.concat(action.payload)
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case UPDATE_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }
        case TODOS_DELETED:
            return {
                ...state,
                tasksDeleted: action.payload
            }
        case CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }
            default:
                return state;
        }
}