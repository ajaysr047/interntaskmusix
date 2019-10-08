import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import Typography from '@material-ui/core/Typography';


export default class mocky extends Component {
  
  state = {
    message: '',
  }
  //To make api call to Mocky.io
    fetch = () => {

      Axios.put('https://www.mocky.io/v2/5d9c0c8131000010002fc387')
        .then( res => {
          this.setState({message : res.data.message})
        })
        .catch(err => { console.log(err)})
    }
    //Clear the rendered data
    clear = () => {
      this.setState({message: ''})
    }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.fetch}>Fetch Data from mocky</Button>
        {' '}
        <Button variant="contained" color="secondary" onClick={this.clear} >Clear data</Button>
        <Typography variant="h1" color="primary" >{this.state.message}</Typography>
      </div>
    )
  }
}
