import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  edit: {
    marginLeft: 'auto',
  },
}));

export default function Set({ _id, title, author, link }) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography color="textSecondary">{author}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          component={RouterLink}
          to={link}
          variant="outlined"
          color="primary"
        >
          Play
        </Button>
        <IconButton className={classes.edit} aria-label="Edit">
          <Link to={`/questions/edit/${_id}`} component={RouterLink}>
            <EditIcon />
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
