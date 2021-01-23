import {
	START_SOCKET_CONNECTION,
	START_SOCKET_CONNECTION_FAIL,
	START_SOCKET_CONNECTION_SUCCESS,
	TEST_ACTION,
} from '../AppActionTypes';

export const setTestAction = () => ({
	type: TEST_ACTION,
});

export const startSocketConnection = () => ({
	type: 'socket',
	types: [START_SOCKET_CONNECTION, START_SOCKET_CONNECTION_SUCCESS, START_SOCKET_CONNECTION_FAIL],
	promise: (socket) => socket.connect(),
});
