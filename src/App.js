import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },  
  appBar: {
    alignItems: 'center',
    marginBottom: '2rem'
  }
}));

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
     <AppBar position="static" className={classes.appBar} >
       <Toolbar>
         <Typography variant="h5">
          Learning app
         </Typography>
       </Toolbar>
     </AppBar>
      <Typography align="center" variant="body1">
         A simple starter app to hack around with new concepts and technologies for learning purposes.
      </Typography>

    </div>
  );
}

export default App;
