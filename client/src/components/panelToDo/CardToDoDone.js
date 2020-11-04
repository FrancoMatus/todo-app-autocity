import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { useHistory } from 'react-router-dom';
import {updateTodo} from '../../redux/actions/todos';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CardToDoDone = ({props}) => {
    const history = useHistory();
    const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          { props.description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardToDoDone;