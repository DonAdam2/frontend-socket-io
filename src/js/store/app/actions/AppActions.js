import {
	START_SOCKET_CONNECTION,
	START_SOCKET_CONNECTION_FAIL,
	START_SOCKET_CONNECTION_SUCCESS,
	TEST_ACTION,
} from '../appActionTypes';

export const setTestAction = () => ({
	type: TEST_ACTION,
});

export function startSocketConnection() {
	return {
		type: 'socket',
		types: [START_SOCKET_CONNECTION, START_SOCKET_CONNECTION_SUCCESS, START_SOCKET_CONNECTION_FAIL],
		promise: (socket) => socket.connect(),
	};
}
