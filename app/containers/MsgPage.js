// @flow
import React, { Component } from 'react';
import Message from '../components/Message';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <Message />;
  }
}
