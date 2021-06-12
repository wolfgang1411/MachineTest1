import {ADD_TODO , DELETE_TODO} from './actionType';
import { v4 as uuidv4 } from 'uuid';

// Add toDo list
export const addTodo = (data) => dispatch => {
    const id = uuidv4()
    data.id = id
    dispatch({
        type:ADD_TODO,
        payload:data
    })
} 

//remove from do do list
export const deleteTodo = (id) => dispatch => {
    dispatch({
        type:DELETE_TODO,
        payload:id
    })
}