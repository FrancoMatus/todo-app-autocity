import React from 'react';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NavBar from '../NavBar/NavBar';

const Home = () => {
    const history = useHistory();
    return(
        <React.Fragment>
             <NavBar />
        <CssBaseline />
        <Container maxWidth="sm">
        <div className="container">
                    <h1>WELCOME TO THE AUTOCITY TODO-APP.</h1>
                   <p> 
                       Here, you can create a tasks for the 
                       job, and everyone will know the tasks 
                       that need to be done, 
                       tasks that are being done and 
                       tasks that have been completed.
                       <hr />
                       If you have been confused, 
                       you can delete the tasks you want, 
                       and then they will be cached.
                   </p>
                   <span>Desarrollado por 
                       <a 
                       className="WithoutStyles"
                       target="_blank"
                       href="https://www.linkedin.com/in/franmatus6/">
                           <b>Franco Matus.</b></a>
                           </span>
                </div>
        </Container>
        </React.Fragment>
    )
}

export default Home;

