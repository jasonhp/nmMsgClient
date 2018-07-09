// @flow
import axios from 'axios';
import { FILL_USER, FILL_MESSAGE } from '../actions/message';

export type messageStateType = {
  loginStatus: boolean,
  msgList: {
    haveMore: boolean,
    list: Array
  },
  users: Array
};

type actionType = {
  +type: string,
  options: {
    offset?: number,
    limit?: number,
    userId?: string | number
  }
};

function getMsgs({ offset, limit, userId }) {
  return axios
    .post('http://localhost:3000/msgs', {
      userId,
      offset,
      limit
    })
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
}

function getUsers() {
  return axios
    .get('http://localhost:3000/users')
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.error(err);
      return err;
    });
}

export default function message(state: messageStateType, action: actionType) {
  switch (action.type) {
    case FILL_USER:
      return getUsers().then(res => {
        if (res.code === -3) {
          return Object.assign({}, state, { loginStatus: false });
        }
        return Object.assign({}, state, {
          users: res.userList
        });
      });
    case FILL_MESSAGE:
      return getMsgs(action.options).then(res => {
        if (res.code === -3) {
          return Object.assign({}, state, { loginStatus: false });
        }
        return Object.assign({}, state, {
          msgList: {
            haveMore: res.more,
            list: res.msgs
          }
        });
      });
    default:
      return state;
  }
}
