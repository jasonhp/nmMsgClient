import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Webview.scss';

type Props = {
  platform: 'wb' | 'wx' | 'qq',
  match: {
    params: {
      plat: string
    }
  }
};

export default class Home extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { loginUrl: '' };
    let snsType = '';
    console.log(this.props.match);
    switch (this.props.match.params.plat) {
      case 'wx':
        snsType = '10';
        break;
      case 'wb':
        snsType = '2';
        break;
      case 'qq':
        snsType = '5';
        break;
      default:
        snsType = '2';
        break;
    }
    this.setState({
      loginUrl: `http://music.163.com/api/sns/authorize?snsType=${snsType}&clientType=web2&callbackType=Login&forcelogin=true`
    });
    this.webviewRef = React.createRef();
  }
  componentDidMount() {
    const webview = this.webviewRef.current;
    webview.addEventListener('did-stop-loading', () => {
      console.log('login webview stopped loading');
      if (/music\.163\.com\/back\/sns/.test(webview.getUrl())) {
        this.context.router.push('/home');
      }
    });
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <header>
            <Link to="/login" className={styles['go-back']}>
              返回
            </Link>登录
          </header>
          <webview
            id="login-webview"
            src={this.state.loginUrl}
            ref={this.webviewRef}
          />
        </div>
      </div>
    );
  }
}
