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
                <label class="switch">
                <input type="checkbox"></input>
                <span class="slider round"></span>
                </label>
                <div style= {style}>
                    {toggLabel}
                </div>
            </div>
        );
    }
}

export default ToggleSwitch;