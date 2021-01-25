//store
import { store } from '../../../../index';
//action types
import {
	GET_IS_TYPING,
	GET_IS_TYPING_FAILED,
	GET_IS_TYPING_SUCCESS,
	SEND_IS_TYPING,
	SEND_MESSAGE,
	SEND_MESSAGE_FAIL,
	SEND_MESSAGE_SUCCESS,
	SET_FEEDBACK,
} from '../chatActionTypes';

export const sendMessage = ({ message, username }) => ({
	type: 'socket',
	//types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL], //removing success and fail because the current backend doesn't support it
	types: [SEND_MESSAGE],
	promise: (socket) => socket.emit('chat', { message, handle: username }),
});

export const sendIsTyping = ({ username }) => ({
	type: 'socket',
	types: [SEND_IS_TYPING],
	promise: (socket) => socket.emit('typing', username),
});

const getTypingUsername = (username) => ({ type: SET_FEEDBACK, feedback: username });

export const getIsTyping = () => ({
	type: 'socket',
	types: [GET_IS_TYPING, GET_IS_TYPING_SUCCESS, GET_IS_TYPING_FAILED],
	promise: (socket) =>
		socket.on('typing', (username) => store.dispatch(getTypingUsername(username))),
});
