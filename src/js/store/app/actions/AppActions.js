import {
	START_SOCKET_CONNECTION,
	START_SOCKET_CONNECTION_FAIL,
	START_SOCKET_CONNECTION_SUCCESS,
	STOP_SOCKET_CONNECTION,
	STOP_SOCKET_CONNECTION_FAIL,
	STOP_SOCKET_CONNECTION_SUCCESS,
} from '../AppActionTypes';

export const startSocketConnection = () => ({
	type: 'socket',
	types: [START_SOCKET_CONNECTION, START_SOCKET_CONNECTION_SUCCESS, START_SOCKET_CONNECTION_FAIL],
	promise: ({ socket }) => socket.connect(),
});

export const stopSocketConnection = () => ({
	type: 'socket',
	types: [STOP_SOCKET_CONNECTION, STOP_SOCKET_CONNECTION_SUCCESS, STOP_SOCKET_CONNECTION_FAIL],
	promise: ({ socket }) => socket.disconnect(),
});
