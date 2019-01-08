import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        const initData = props.initData;
        const value = (initData.value/initData.total)*280;
        const color = initData.color;
        this.state = {
            value: value,
            color: color,
            id: props.initData.id
        };
    }

    componentDidMount() {
        const c = document.getElementById(this.state.id);
        let ctx = c.getContext("2d");
        ctx.lineWidth = 30;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#F5F6FA";
        ctx.beginPath();
        ctx.moveTo(20, 75);
        ctx.lineTo(280, 75);
        ctx.stroke();
        ctx.strokeStyle = this.state.color;
        ctx.beginPath();
        ctx.moveTo(20, 75);
        ctx.lineTo(this.state.value, 75);
        ctx.stroke();
    }

    render() {
        return (
            <div className="app-progress-bar">
                <canvas id={this.state.id}></canvas>
            </div>
        );
    }
}

export default ProgressBar;