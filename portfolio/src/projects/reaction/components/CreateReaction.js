import React, { Component } from 'react';
import { connect } from 'react-redux';
import { REACTION_OBJECTS } from '../actions/types';
import { PubSubContext } from '../pubsub';
import { createReaction } from '../actions/reactions';

class CreateReaction extends Component {
  publishReaction = ({ type, emoji }) => () => {
    const { username, messageId } = this.props;

    this.context.pubsub.publish(createReaction({ type, emoji, username, messageId }));
  }

  render() {
    return (
      <div>
        {
          REACTION_OBJECTS.map(REACTION_OBJECT => {
            const { type, emoji } = REACTION_OBJECT;

            return (
              <span
                style={{ margin: 5, cursor: 'pointer' }}
                key={type}
                onClick={this.publishReaction({ type, emoji })}
              >
                {emoji}
              </span>
            )
          })
        }
      </div>
    )
  }

  static contextType = PubSubContext;
}

export default connect(({ username }) => ({ username }))(CreateReaction);
