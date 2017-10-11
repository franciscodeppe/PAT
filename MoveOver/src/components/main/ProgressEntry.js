import React, { Component } from 'react';

let Panel = require("react-bootstrap/lib/Panel");


const title = (
    <h3>Progress Date</h3>
);

class ProgressEntry extends Component {
    render() {
        return (
            <Panel header={title}>
                Progress Content
            </Panel>
        );
    }
}


export default ProgressEntry;
