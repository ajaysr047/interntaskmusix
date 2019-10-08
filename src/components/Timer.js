import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';



export default class Timer extends Component {
    state = {
        
        timerInitialSeconds: '60',
        timerInitialMinutes: '60',
        timerInitialHours: '1',
        open: false
    }
    //To start the timer
    start = () => {
            this.myInterval = setInterval(() => {
                this.setState({timerInitialSeconds: this.state.timerInitialSeconds-1})
                if(this.state.timerInitialSeconds === 0 )
                {
                    this.setState({
                        timerInitialMinutes: this.state.timerInitialMinutes-1,
                        timerInitialSeconds: '60'
                    })
                    if(this.state.timerInitialMinutes === 0 )
                    {
                        this.setState({
                            timerInitialHours: this.state.timerInitialHours-1,
                            timerInitialMinutes: '60'
                        })
                        if(this.state.timerInitialHours === 0)
                        {
                            this.setState({
                                timerInitialHours: '2',
                                timerInitialMinutes: '60',
                                timerInitialSeconds: '60'
                            })
                            clearInterval(this.myInterval)
                            //Setting state for dialog to open
                            this.setState({open: !this.state.open})
                        }
                    }
                }
            }, 1)
    }
    //To stop the timer
    stop = () => {
        clearInterval(this.myInterval)
    }
    //Reset the timer
    reset = () => {
        this.setState({
            timerInitialHours: '2',
            timerInitialMinutes: '60',
            timerInitialSeconds: '60'
        })
    }
    //To handle the dialog 
       handleClose = () => {
        // setOpen(false);
        this.setState({open: !this.state.open})
      };
    render() {
        //Styling for elements
        const useStyles = {
            card: {
                display: "flex",
                justifyContent: "center",
                margin: "5%"
            },
            root: {
                flexGrow: 1,
                margin: "5%"
            },
           
        };    
           
                return (
                <div>
                    <Paper elevation={5}>
                    <Typography variant="h1" color="textSecondary">Timer</Typography>
                    </Paper>
            <div style={useStyles.card}>
            <Dialog
      
                 open={this.state.open}
                    onClose={this.handleClose}
                aria-labelledby="responsive-dialog-title"
                >
        <DialogTitle id="responsive-dialog-title">{"Time's Up!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Close
          </Button>
         
        </DialogActions>
      </Dialog>
                <Paper elevation={5} >
                    <Card style={useStyles.card}>
                        <Card >
                             <CardContent>
                               <Typography variant="h6" color="textSecondary">Hours<br/>{this.state.timerInitialHours}</Typography>
                            </CardContent>
                        </Card>
                        <Card >
                           <CardContent>
                            <Typography variant="h6" color="textSecondary">Minutes<br/>{this.state.timerInitialMinutes}</Typography>
                         </CardContent>
                        </Card>
                         <Card >
                             <CardContent>
                             <Typography variant="h6" color="textSecondary">Seconds<br/>{this.state.timerInitialSeconds}</Typography>
                         </CardContent>
                         </Card>
                    </Card>
                    <br/>
                    <Paper elevation={5} style={useStyles.card}>
        
                        <CardActions>
                             <Button variant="outlined" color="primary" onClick={this.start}>Start</Button>
                             <Button variant="outlined" color="secondary" onClick={this.stop}>Stop</Button>
                             <Button variant="outlined" color="primary" onClick={this.reset}>Reset</Button>
                        </CardActions>
      
                    </Paper>
                </Paper>
                </div>
                    <Paper style={useStyles.root}>
                    <LinearProgress color="primary" variant="buffer" value={this.state.timerInitialHours * 30} valueBuffer={this.state.timerInitialMinutes * 1.67}/>
                    <br/>
                    <LinearProgress color="secondary" variant="buffer" value={this.state.timerInitialHours * 30} valueBuffer={this.state.timerInitialMinutes * 1.67}/>
                    <br/>
                    <LinearProgress color="primary" variant="buffer" value={this.state.timerInitialHours * 30} valueBuffer={this.state.timerInitialMinutes * 1.67}/>
                    </Paper>
                    <div>
                        <Typography variant="body1" color="textSecondary">Timer speed has been set high for demo purpose. Kindly let the timer run out.</Typography>
                        <Link to='/'><Button variant="contained" color="secondary">Back</Button></Link>
                    </div>
                </div>
                )
            
            
        
    }
}
