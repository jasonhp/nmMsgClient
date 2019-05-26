// @flow
import React, { Component } from 'react';
import styles from './Message.scss';

type SubProps = {
  users: Array<UserType>,
  msgList: Array<MsgType>
};
type UserType = {
  avatar: string,
  nickname: string
};
type MsgType = {
  fromUser: {
    userId: number | string,
    avatar: string,
    nickname: string
  },
  id: number | string,
  msg: {
    type: number,
    content: string
  } | null,
  time: number,
  toUser: {
    userId: number | string,
    avatar: string,
    nickname: string
  }
};

const UserList = (props: SubProps) => {
  const { users } = props;
  const listItems = users.map(user => (
    <li key={user.userId}>
      <img src={user.avatar} alt="" />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

const MsgList = (props: SubProps) => {
  const { msgList } = props;
  const listItems = msgList.map(msg => (
    <li key={msg.id}>
      <img src={msg.fromUser.avatar} alt="" className={styles['msg-avatar']} />
      <span className={styles['msg-bubble']}>{msg.content}</span>
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default class Home extends Component<Props> {
  props: Props;
  constructor(props) {
    super(props);
    this.state = { users: [], msgList: [] };
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>消息</h2>
          <div className={styles['msg-users-wrapper']}>
            <h3>选择好友：</h3>
            <UserList users={this.state.users} />
          </div>
          <div className={styles['msg-list-wrapper']}>
            <MsgList msgList={this.state.msgList} />
          </div>
          div.
        </div>
      </div>
    );
  }
}
