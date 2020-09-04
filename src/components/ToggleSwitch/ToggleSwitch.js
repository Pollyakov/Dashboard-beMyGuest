import React, { Component } from 'react';
import './ToggleSwitch.css';    

class ToggleSwitch extends Component {
    constructor(props){
        super(props);    
    }
    
    render() {
        let toggLabel;
        let style= {backgroundColor: 'blue'}
        return (
            <div>
                <label className="switch">
                <input type="checkbox"></input>
                <span className="slider round"></span>
                </label>
                <div style= {style}>
                    {toggLabel}
                </div>
            </div>
        );
    }
}

export default ToggleSwitch;