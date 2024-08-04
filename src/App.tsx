import React from 'react';
import logo from './logo.svg';
import './App.module.css';
import {InviteMembers} from "./features/InviteMembers/InviteMembers";
import classes from "./App.module.css"
function App() {
  return (
    <div className={classes.app}>
      <InviteMembers/>
    </div>
  );
}

export default App;
