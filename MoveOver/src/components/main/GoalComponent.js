import React, { Component } from 'react';
import GoalLabel from './GoalLabel';
import SubGoals from './SubGoals';

class GoalComponent extends Component {
    state = {
        expanded: false
    }

    componentDidMount() {
        //Retrieve and display user's goals below
    }
    expand = () => {
        this.setState({ expanded: !this.state.expanded })

    }
    render() {
        return (
            <div>
                <a onClick={this.expand}><GoalLabel /></a>
                <SubGoals expanded={this.state.expanded} />
            </div>
        );
    }
}

export default GoalComponent;
