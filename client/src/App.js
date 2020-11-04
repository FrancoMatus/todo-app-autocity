import './App.css';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import CreateTodo from './components/panelToDo/ToDoCreate';
import EditTodo from './components/panelToDo/ToDoEdit';
import RenderToDos from './components/Home/RenderToDo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
        path='/home'
        component={Home}
        />
        <Route 
        path='/todo/add'
        component={CreateTodo}
        />
        <Route
        path='/todo/edit/:_id'
        render= { ({match}) => <EditTodo _id={match.params._id} />}
        />
        <Route
        path="/todos"
        component={RenderToDos}
        />  
          <Redirect 
          to='/home'
          />
        </Switch>
    </div>
  );
}

export default App;
