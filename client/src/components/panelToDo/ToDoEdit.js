import Axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import './todo.css';
import { makeStyles } from '@material-ui/core/styles';
import { updateTodo, getTodoById } from '../../redux/actions/todos';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const EditTodo = ({_id}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const currentTodo = useSelector( state => state.todos.currentTodo)

useEffect(() => {
   dispatch(getTodoById({_id}))
}, [])

    const onSubmit = data => {
        dispatch(updateTodo(data))
    }
    return(
        <div className='container addCategoryForm'>
            <div className="formularioTemplate">
          <h2>New Task</h2>
          <div class="col-md-12 ">
            <form
              onSubmit={handleSubmit(onSubmit)}
            >
                <div className='formularioIn'>
                  <label>Name</label>
                  <input 
                    className='form-control'
                    type="text" 
                    name="name"
                    ref={register}
                    required
                  />
                </div>
                <div className='formularioIn'>
                <label>Description</label>
                  <input 
                    className='form-control'
                    type="text" 
                    name="description"
                    ref={register}
                    required
                  />
                </div>
                <button className='btn btn-primary box-button'>Add Task</button>
            </form>
          </div>
          </div>
        </div>
      )
}

export default EditTodo;