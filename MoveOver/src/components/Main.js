import React, { Component } from 'react';
import GoalComponent from './main/GoalComponent';
import ProgressEntry from './main/ProgressEntry';

let Button = require("react-bootstrap/lib/Button");
let ButtonToolbar = require("react-bootstrap/lib/ButtonToolbar")

class Main extends Component {
  render() {
    return (
      <div className="main-page-container">
        <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
        <div className="row main-1">
          <div className="col-lg-4">
            <div className="goals text-center">
              < ButtonToolbar >
                <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"> </i> Add Goal</Button>
              </ButtonToolbar >
              <hr />
              <GoalComponent />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="goal-progress-container text-center">
              <ButtonToolbar>
                <Button bsStyle="success" bsSize="large"><i class="fa fa-plus" aria-hidden="true"></i> Add Progress</Button>
              </ButtonToolbar>
              <hr />
              <ProgressEntry />
              <ProgressEntry />
              <ProgressEntry />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
