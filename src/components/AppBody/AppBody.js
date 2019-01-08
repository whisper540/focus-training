import React from 'react';
import './AppBody.css';
import ProgressBar from '../libs/ProgressBar/ProgressBar.js';

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
                <div className="train-list-container">
                    <dl className="train-list">
                        <dt>
                            <span>状态</span>
                            <span>人数</span>
                            <span>创建时间</span>
                            <span>进度</span>
                            <span>备注</span>
                            <span>操作</span>
                        </dt>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 10, "color": "#2EC5CC", "id":"prgress-canvas01" }}/></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 20, "color": "#2EC5CC", "id": "prgress-canvas02" }} /></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 40, "color": "#4C84FF", "id": "prgress-canvas03" }} /></span>
                            <span>言语1部</span>
                            <span>查看 <i>删除</i></span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 60, "color": "#FE5462", "id": "prgress-canvas04" }} /></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 80, "color": "#2EC5CC", "id": "prgress-canvas05" }} /></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 50, "color": "#FF8300", "id": "prgress-canvas06" }} /></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><ProgressBar initData={{ "total": 100, "value": 90, "color": "#2EC5CC", "id": "prgress-canvas07" }} /></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                    </dl>
                </div>
                <div className="train-page-btn">
                    <span>下一页</span>
                    <span>上一页</span>
                </div>
            </div>
        </div>
    );
};

export default AppBody;