//action types
import {
  FETCH_TYPING_USERNAME,
  FETCH_TYPING_USERNAME_FAILED,
  FETCH_TYPING_USERNAME_SUCCESS,
  FETCH_MESSAGES,
  FETCH_MESSAGES_FAIL,
  FETCH_MESSAGES_SUCCESS,
  SEND_TYPING_USERNAME,
  SEND_MESSAGE,
  /*SEND_MESSAGE_FAIL,
  SEND_MESSAGE_SUCCESS,*/
  SAVE_RECEIVED_TYPING_USERNAME,
  SAVE_RECEIVED_MESSAGES,
} from '../chatActionTypes';

export const sendMessage = ({ message, username }) => ({
  type: 'socket',
  //types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL], //removing success and fail because the current backend doesn't support it
  types: [SEND_MESSAGE],
  promise: ({ socket }) => socket.emit('chat', { message, handle: username }),
});

const saveReceivedMessages = ({ messages }) => ({ type: SAVE_RECEIVED_MESSAGES, messages });

export const fetchMessages = () => ({
  type: 'socket',
  types: [FETCH_MESSAGES, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAIL],
  promise: ({ socket, dispatch }) =>
    socket.on('chat', (messages) => dispatch(saveReceivedMessages({ messages }))),
});

export const sendTypingUsername = ({ username }) => ({
  type: 'socket',
  types: [SEND_TYPING_USERNAME],
  promise: ({ socket }) => socket.emit('typing', username),
});

const saveReceivedTypingUsername = (username) => ({
  type: SAVE_RECEIVED_TYPING_USERNAME,
  username,
});

export const fetchTypingUsername = () => ({
  type: 'socket',
  types: [FETCH_TYPING_USERNAME, FETCH_TYPING_USERNAME_SUCCESS, FETCH_TYPING_USERNAME_FAILED],
  promise: ({ socket, dispatch }) =>
    socket.on('typing', (username) => dispatch(saveReceivedTypingUsername(username))),
});
