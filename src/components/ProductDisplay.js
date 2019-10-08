import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Mocky from './mocky';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  paper: {
    margin: theme.spacing(1),
  },
}));

export default function ImgMediaCard() {
  const classes = useStyles();
//For Switch
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };
//For Dialog
const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className={classes.root}>
        <Paper elevation={5}>
        <Typography variant="h1" align="center" color="textSecondary">Product Page</Typography>
        <FormControlLabel
      control={<Switch checked={checked} onChange={handleChange} />}
      label="Show Guitar"
    />
        </Paper>
    <br/>
    <Mocky/>
    
    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Guitar"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.

Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.

Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button variant="outlined" onClick={handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <br/>
    <div className={classes.container}>
      <Grow in={checked}>
        <Paper elevation={4} className={classes.paper}>
        <Card className={classes.card}>
        <Link to='/timer' >
      <CardActionArea  >
        <CardMedia
          component="img"
          alt="Guitar"
          height="330"
          image={require('../resources/guitar.jpeg')}
          title="Guitar"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="textPrimary">
            Guitar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit euismod in pellentesque massa placerat duis ultricies lacus. Viverra mauris in aliquam sem fringilla ut.
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
  
      <CardActions>
      <Button size="small" color="primary" variant="outlined" onClick={handleClickOpen}>
          Details
        </Button>
        
        <Link to="/timer" > <Button size="small" color="secondary" variant="outlined">
        Buy now </Button></Link>
        
      </CardActions>
    </Card>
        </Paper>
      </Grow>
      
    </div>
    <div>
    <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
           <Typography variant="body1" color="textSecondary">Click on the product card or the buy now button to proceed to timer page</Typography>
    </Grow>
    </div>
  </div>
    
  );
}