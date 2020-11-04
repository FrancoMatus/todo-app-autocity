import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import 
{ 
    getAllTodos,
    getTaskToDo
 } 
from '../../redux/actions/todos';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardToDo from '../panelToDo/CardToDo';
import Axios from 'axios';
import CardToDoIP from '../panelToDo/CardToDoIP';
import CardToDoDone from '../panelToDo/CardToDoDone';
import NavBar from '../NavBar/NavBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'black'
      },
    paperToDo: {
      backgroundColor:'blue',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white'
    },
    paperInProgress: {
        backgroundColor:'orange',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
      },
      paperDone: {
        backgroundColor:'green',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
      },
  }));

const RenderToDos = () => {

// const dispatch = useDispatch();
const classes = useStyles();
const [todos, setTodos] = useState([])
const [inProgress, setInProgress] = useState([])
const [done, setDone] = useState([])

useEffect( async () => {
    let response = await Axios.get('http://localhost:3001/todo')
    let todoTemp = [];
        let inProgressTemp = [];
        let doneTemp = [];
        response.data &&  response.data.forEach( elements => {
        if(elements.state === 'todo'){
            todoTemp.push(elements);
        }
        if(elements.state === 'inprogress'){
            inProgressTemp.push(elements)
        }
        if(elements.state === 'done'){
            doneTemp.push(elements)
        }
    })
    setTodos(todoTemp);
    setInProgress(inProgressTemp);
    setDone(doneTemp);
}, [])
    return(
        <div>
            <NavBar />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}><b>TALLER MECÁNICO AUTOCITY</b></Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paperToDo}><b>TODO</b></Paper>
                    <Grid item xs={12} sm={6} md={4}>
                    <ul>
                    {todos.length === 0 ? <Grid item xs={12} sm={6} md={4}>
                    <span>No hay tareas para realizar.</span>
                    </Grid>
                    :
                    
                    todos && todos.map( todo => {
                    return(
                    <Grid item xs={12} sm={6} md={4}>
                    <li className='WithoutStyles cardToDo'>
                        <CardToDo props={todo} />
                       
                        </li> </Grid>)
                    })
                    }
                    </ul>
                    </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paperInProgress}><b>IN PROGRESS</b></Paper>
                    <ul>
                    {inProgress.length === 0 ? <Grid item xs={12} sm={6} md={4}>
                    <span>No hay tareas en progreso.</span>
                    </Grid>
                    :
                    
                    inProgress && inProgress.map( todo => {
                    return(
                    <Grid item xs={12} sm={6} md={4}>
                    <li className='WithoutStyles cardToDo'>
                        <CardToDoIP props={todo} />
                    </li>
                    </Grid>)
                    })
                    }
                    </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paperDone}><b>DONE</b></Paper>
                    <ul>
                    {done.length === 0 ? 
                    <div><span>No hay tareas finalizadas.</span></div>
                    :
                    
                    done && done.map( todo => {
                    return(
                    <Grid item xs={12} sm={6} md={4}>
                    <li className='WithoutStyles cardToDo'>
                        <CardToDoDone props={todo} />
                        </li>
                        </Grid>)
                    })
                    }
                    </ul>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default RenderToDos;
