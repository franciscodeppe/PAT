import React, { Component } from 'react';
import CompletedGoalsComp from './CompletedGoalsComp.js'

let Panel = require("react-bootstrap/lib/Panel");

const title = (
  <h3>Completed</h3>
);

class CompletedGoals extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <Panel header={title}>
          <CompletedGoalsComp />
          <CompletedGoalsComp />
          <CompletedGoalsComp />
        </Panel>
        </div>
    );
  }
}


export default CompletedGoals;
