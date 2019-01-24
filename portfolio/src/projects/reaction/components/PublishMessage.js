import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PubSubContext } from '../pubsub';
import { newMessage } from '../actions/messages';

class PublishMessage extends Component {
  state = { text: '' };

  updateText = event => this.setState({ text: event.target.value });

  publishMessage = () => {
    const { text } = this.state;
    const { username } = this.props;

    this.context.pubsub.publish(newMessage({ text, username }));
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') this.publishMessage();
  }

  render() {
    console.log('this', this);

    return (
      <div>
        <h3>Got something to say?</h3>
        <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
        {' '}
        <button onClick={this.publishMessage}>Publish it!</button>
      </div>
    )
  }

  static contextType = PubSubContext;
}

export default connect(({ username }) => ({ username }))(PublishMessage);
