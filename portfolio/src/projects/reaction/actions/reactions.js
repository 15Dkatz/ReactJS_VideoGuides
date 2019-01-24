import uuid from 'uuid/v4';

export const createReaction = ({ type, emoji, username, messageId }) => {
  return {
    type,
    item: { id: uuid(), timestamp: Date.now(), emoji, username, messageId }
  };
};