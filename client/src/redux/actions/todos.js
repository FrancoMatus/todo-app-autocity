import axios from 'axios';
import {
    GET_ALL_TODOS, 
    CREATE_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    GET_TASK_TODO,
    TODOS_DELETED,
    CURRENT_TODO
} from '../Constants';

export const getAllTodos = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/todo')
        .then( res => dispatch({ type: GET_ALL_TODOS, payload: res.data }))
        .catch( err => console.log ( err ));
    }
}

export const addTodo = (data) => {
    return function(dispatch){
        return axios.post('http://localhost:3001/todo/add', data)
        .then( res => dispatch({ type: CREATE_TODO, payload: res.data }))
        .catch( err => console.log( err ));
    }
}

export const deleteTodo = (id) => {
    return function(dispatch){
        return axios.delete(`http://localhost:3001/todo/${id}`)
        .then( res => dispatch({ type: DELETE_TODO, payload: res.data }))
        .catch( err => console.log( err ));
    }
}

export const updateTodo = (_id, data) => {
    return function(dispatch){
        return axios.put(`http://localhost:3001/todo/edit/${_id}`, data)
        .then( res => dispatch({ type: UPDATE_TODO, payload: res.data }))
        .catch( err => console.log( err ));
    }
}

export const getTaskToDo = (state) => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/todo/filtertodo`, state)
        .then( res => dispatch({ type: GET_TASK_TODO, payload: res.data }))
        .catch( err => console.log( err ));
    }
};

export const todosDeleted = (_id, state) => {
    return function(dispatch){
        return axios.delete(`http://localhost:3001/todo/${_id}`, state)
        .then( res => dispatch( { type: TODOS_DELETED, payload: res.data } ))
        .catch( err => console.log( err ));
    }
}

export const getTodoById = (_id) => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/todo/${_id}`)
        .then( res => dispatch({ type: CURRENT_TODO, payload: res.data}))
        .catch( err => console.log( err ));
    }
}