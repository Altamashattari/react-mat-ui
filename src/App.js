import React from 'react';
import './App.css';
import {Button, Typography} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloStyle: {
    fontStyle: 'oblique',
    color: 'red',
    fontSize: "30px"
  },
  buttonStyle: {
    color: 'green',
    border: 0
  }
});

function App() {
  const {helloStyle, buttonStyle} = useStyles(); 
  return (
    <div className="App">
      <h1>Material UI</h1>
      <Typography variant="h3" color="primary" className={helloStyle}>Introduction</Typography>
      <Button variant="outlined" color="primary" className={buttonStyle}>Primary Button</Button>
      <Button variant="outlined" color="secondary">Secondary Button</Button>
    </div>
  );
}

export default App;
