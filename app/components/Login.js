// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Login.scss';

type Props = {};

export default class Login extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { phone: '', pwd: '' };

    this.phoneChange = this.phoneChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  phoneChange(event) {
    this.setState({ phone: event.target.value });
  }
  pwdChange(event) {
    this.setState({ pwd: event.target.value });
  }
  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>登录网易云账号</h2>
          <div className={styles['login-wrap']} data-tid="login-wrap">
            <div className={styles['input-wrap']}>
              <label htmlFor="phone">手机号：</label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={this.phoneChange}
                value={this.state.phone}
              />
              <br />
              <label htmlFor="pwd">密码：</label>
              <input
                id="pwd"
                name="pwd"
                type="password"
                onChange={this.pwdChange}
                value={this.state.pwd}
              />
              <br />
            </div>
            <div className={styles['third-party-login']}>
              <NavLink href="" target="_blank" to="/snsLogin/wb">
                微博登录
              </NavLink>
              <NavLink href="" target="_blank" to="/snsLogin/wx">
                微信登录
              </NavLink>
              <NavLink href="" target="_blank" to="/snsLogin/qq">
                qq登录
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
