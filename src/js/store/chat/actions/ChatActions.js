//store
import { store } from '../../../../index';
//action types
import {
	FETCH_IS_TYPING,
	FETCH_IS_TYPING_FAILED,
	FETCH_IS_TYPING_SUCCESS,
	FETCH_MESSAGES,
	FETCH_MESSAGES_FAIL,
	FETCH_MESSAGES_SUCCESS,
	SEND_IS_TYPING,
	SEND_MESSAGE,
	SEND_MESSAGE_FAIL,
	SEND_MESSAGE_SUCCESS,
	SAVE_RECEIVED_TYPING_USERNAME,
	SAVE_RECEIVED_MESSAGES,
} from '../chatActionTypes';

export const sendMessage = ({ message, username }) => ({
	type: 'socket',
	//types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL], //removing success and fail because the current backend doesn't support it
	types: [SEND_MESSAGE],
	promise: (socket) => socket.emit('chat', { message, handle: username }),
});

const saveReceivedMessages = ({ messages }) => ({ type: SAVE_RECEIVED_MESSAGES, messages });

export const fetchMessages = () => ({
	type: 'socket',
	types: [FETCH_MESSAGES, FETCH_MESSAGES_SUCCESS, FETCH_MESSAGES_FAIL],
	promise: (socket) =>
		socket.on('chat', (messages) => store.dispatch(saveReceivedMessages({ messages }))),
});

export const sendIsTyping = ({ username }) => ({
	type: 'socket',
	types: [SEND_IS_TYPING],
	promise: (socket) => socket.emit('typing', username),
});

const saveTypingUsername = (username) => ({
	type: SAVE_RECEIVED_TYPING_USERNAME,
	username,
});

export const fetchIsTyping = () => ({
	type: 'socket',
	types: [FETCH_IS_TYPING, FETCH_IS_TYPING_SUCCESS, FETCH_IS_TYPING_FAILED],
	promise: (socket) =>
		socket.on('typing', (username) => store.dispatch(saveTypingUsername(username))),
});
