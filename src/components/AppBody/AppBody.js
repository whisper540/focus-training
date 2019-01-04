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
                            <span><progress></progress></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><progress></progress></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><progress></progress></span>
                            <span>言语1部</span>
                            <span>查看 <i>删除</i></span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><progress></progress></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><progress></progress></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><progress></progress></span>
                            <span>言语1部</span>
                            <span>查看</span>
                        </dd>
                        <dd>
                            <span>草稿</span>
                            <span>9</span>
                            <span>2019.01.04 10:10</span>
                            <span><progress></progress></span>
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