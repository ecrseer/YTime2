import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Sbutton({txt,onShr}) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        
        <Button variant="contained" color="primary" onClick={onShr}>
          {txt}
        </Button>
      </div>
    );
  }