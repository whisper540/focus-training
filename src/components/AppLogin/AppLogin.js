import React from 'react';
import './AppLogin.css';

const AppLogin = ({history}) => {
    let _eye, _username, _pwd, _errorinfo;
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
    const checkPhoneNum = function($phoneInput) {
        let $reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!$reg.test($phoneInput)) {
            return false;
        } else {
            return true;
        }
    };
    const checkUsername = function($usernameInput) {
        let $reg = /^[a-zA-z]{4,9}$/;
        if (!$reg.test($usernameInput)) {
            return false;
        } else {
            return true;
        }
    };
    // const checkPassword = function($passwordInput) {

    // };
    const checkIn = e => {
        if (checkPhoneNum(_username.value) || checkUsername(_username.value)) {
            _errorinfo.classList.remove('info-show');
            _errorinfo.classList.add('info-hidden');
        } else {
            _errorinfo.classList.remove('info-hidden');
            _errorinfo.classList.add('info-show');
        }
    };

    const goto_Pages = function() {
        history.push(`/`);
    };

    return (
        <div className="app-login">
            <header>
                <h1>六六脑®集中训练</h1>
            </header>
            <div className="login-body">
                <div className="body-left">
                   &nbsp;
                </div>
                <div className="body-right">
                    <div className="right-container">
                        <div className="right-header">
                            <a className="right-active" href="javascript:void(0);" role="button">密码登录</a>
                            <a href="javascript:void(0);">短信验证码登录</a>
                        </div>
                        <div className="right-body">
                            <div className="input-in">
                                <div className="input-info">
                                    <label>手机号/用户名</label>
                                    <span className="error-info info-hidden" ref={input => _errorinfo = input}>输入格式有误,请检查</span>
                                </div>
                                <input type='text' onBlur={checkIn} ref={ input => _username = input }/>
                            </div>
                            <div className="input-in">
                                <div className="input-info">
                                    <label>密码</label>
                                    <span className="error-info">&nbsp;</span>
                                </div>
                                <input type='password' ref={ input => _pwd = input }/>
                                <i className="seesee seesee-close" onClick={changeIcon} ref={input => _eye = input}></i>
                            </div>
                            <div className="auto-login-container">
                                <label htmlFor="auto-login" className="auto-login-label">30天内自动登录</label>
                                <input type="checkbox" id="auto-login" />
                                <em></em>
                            </div>
                            <div className="login-button">
                                <button onClick={goto_Pages}>登录</button>
                            </div>
                        </div>
                        <div className="right-footer">
                            <a href="javascript:void(0);">注册</a>
                            <a href="javascript:void(0);">登录遇到问题?</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div>版权信息</div>
            </footer>
        </div>
    );
};

export default AppLogin;