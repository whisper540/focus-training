import React from 'react';
import './AppLogin.css';

const AppLogin = () => {
    let _eye,_pwd;
    const clock = function* () {
        while(true) {
            _eye.classList.remove('seesee-close');
            _eye.classList.add('seesee-open');
            _pwd.type = 'text';
            yield;
            _eye.classList.remove('seesee-open');
            _eye.classList.add('seesee-close');
            _pwd.type = 'password';
            yield;
        }
    };
    const c = clock();
    const changeIcon = e => {
        c.next();
    };
    return (
        <div className="app-login">
            <header>六六脑®集中训练</header>
            <div className="login-body">
                <div className="body-left">
                   &nbsp;
                </div>
                <div className="body-right">
                    <div className="right-container">
                        <div className="right-header">
                            <a className="active" href="javascript:void(0);">密码登录</a>
                            <a href="javascript:void(0);">短信验证码登录</a>
                        </div>
                        <div className="right-body">
                            <div className="input-in">
                                <label>手机号/用户名</label>
                                <input type='text' />
                            </div>
                            <div className="input-in">
                                <label>密码</label>
                                <input type='password' ref={ input => _pwd = input }/>
                                <i className="seesee seesee-close" onClick={changeIcon} ref={input => _eye = input}></i>
                            </div>
                            <div className="auto-login-container">
                                <label htmlFor="auto-login" className="auto-login-label">30天内自动登录</label>
                                <input type="checkbox" id="auto-login" />
                                <em></em>
                            </div>
                            <div className="login-button">
                                <button>登录</button>
                            </div>
                        </div>
                        <div className="right-footer">
                            <a href="javascript:void(0);">注册</a>
                            <a href="javascript:void(0);">登录遇到问题?</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>版权信息</footer>
        </div>
    );
};

export default AppLogin;