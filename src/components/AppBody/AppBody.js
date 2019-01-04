import React from 'react';
import './AppBody.css';

const AppBody = () => {
    return (
        <div className="app-body">
            <div className="body-container">
                <div>
                    <a className="train-filter">
                        <ul>
                            <li><span className="filter-active">全部</span></li>
                            <li><span>进行中</span></li>
                            <li><span>草稿</span></li>
                            <li><span>已结束</span></li>
                        </ul>
                        训练状态
                    </a>
                    <a className="create-date">创建时间</a>
                    <input type="search" className="search-input" placeholder="搜索"/>
                    <button className="create-btn">新建训练</button>
                </div>
                <div>
                    B
                </div>
                <div>
                    C
                </div>
                <div>
                    D
                </div>
            </div>
        </div>
    );
};

export default AppBody;