import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos, addTodo } from '../../redux/actions/todos';
import { useForm } from "react-hook-form";
import './todo.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import NavBar from '../NavBar/NavBar';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CreateTodo = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [allTodosDeleted, setAllTodosDeleted] = useState([])
const onSubmit = data => {
    dispatch(addTodo(data))
}

useEffect( async () =>{
  const response = await Axios.get('http://localhost:3001/todo')
  let deletedTemp = [];
  response.data && response.data.forEach( element => {
    if(element.state === "deleted"){
      deletedTemp.push(element)
    }
  })
  setAllTodosDeleted(deletedTemp)
}, []);

return (
  <div>
    <NavBar />
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
      <ul className="unorderList">
        { allTodosDeleted.length === 0 ?
         <div className="containerText">
             <h3 
           
             >There are no deleted tasks.</h3>
             </div>
         :
         <div className="containerText">
              <h4 className="textDeleted">
                  Deleted
              </h4>
              <List component="nav" className={classes.root} aria-label="mailbox folders">
         {allTodosDeleted && allTodosDeleted.map( todosDeleted => {
          return (<li className="WithoutStyles">
              <ListItem button>
                <ListItemText primary={todosDeleted.name} />
              </ListItem>
              <Divider light />
            </li>)
         })}
        </List>
         </div>}
      </ul>
    </div>
  </div>)
}

export default CreateTodo;