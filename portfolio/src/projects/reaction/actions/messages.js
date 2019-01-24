import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

export const newMessage = ({ text, username }) => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), timestamp: Date.now(), text, username }
});