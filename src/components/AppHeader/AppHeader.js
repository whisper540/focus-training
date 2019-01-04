import React from 'react';
import './AppHeader.css';

const AppHeader = () => {
    return (
        <header className="app-header">
            <h1>六六脑®集中训练<span>管理端</span></h1>
            <nav className="nav-btn">
                <a className="active">系统首页</a>
                <a>自定义训练</a>
                <a>自定义患者组</a>
            </nav>
            <nav className="info-list">
                <i className="info-head"></i>
                <i className="info-bell"></i>
                <i className="info-exit"></i>
            </nav>
        </header>
    );
};

export default AppHeader;