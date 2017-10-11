import React, { Component } from 'react';
import ProgressEntry from '../main/ProgressEntry';

let Panel = require("react-bootstrap/lib/Panel");

const title = (
  <h3>Selected Goal Progress</h3>
);

class SelectedGoal extends Component {
  render(){
    return(
      <Panel header={title}>
        <ProgressEntry />
        <ProgressEntry />
        <ProgressEntry />
        <ProgressEntry />
    </Panel>
    );
  }
}


export default SelectedGoal;
