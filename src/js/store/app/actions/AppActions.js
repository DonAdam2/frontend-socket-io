import {
	SEND_MESSAGE,
	SEND_MESSAGE_FAIL,
	SEND_MESSAGE_SUCCESS,
	START_SOCKET_CONNECTION,
	START_SOCKET_CONNECTION_FAIL,
	START_SOCKET_CONNECTION_SUCCESS,
	TEST_ACTION,
} from '../appActionTypes';

export const setTestAction = () => ({
	type: TEST_ACTION,
});

export const startSocketConnection = () => ({
	type: 'socket',
	types: [START_SOCKET_CONNECTION, START_SOCKET_CONNECTION_SUCCESS, START_SOCKET_CONNECTION_FAIL],
	promise: (socket) => socket.connect(),
});

export const sendMessage = ({ message, userName }) => ({
	type: 'socket',
	types: [SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL],
	promise: (socket) => socket.emit('chat', { message, handle: userName }),
});
