import React, { Component } from 'react';
import ActiveGoals from './progress/ActiveGoals';
import CompletedGoals from './progress/CompletedGoals';
import SelectedGoal from './progress/SelectedGoal';




class Progress extends Component {
    render(){
      return(
        <div className="row">
          <div class="progress-page">
            <div class="jumbotron">
              <div class="row">
                <ActiveGoals />
                <CompletedGoals />
              </div>
              <SelectedGoal />
            </div>
          </div>
        </div>
      );
    }
}


export default Progress;
