import React, { Component } from 'react';
import './AppAlert.css';
import Dialog from '../../assets/js/common.js';

class AppAlert extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let dialog = new Dialog.Alert();
        dialog.init();
    }

    render() {
        return (
            <div className="app-alert" id="app-alert">
                alert!
            </div>
        );
    }
    
};

export default AppAlert;