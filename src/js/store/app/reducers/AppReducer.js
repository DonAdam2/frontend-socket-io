//action types
import {
	START_SOCKET_CONNECTION,
	START_SOCKET_CONNECTION_FAIL,
	START_SOCKET_CONNECTION_SUCCESS,
	STOP_SOCKET_CONNECTION,
	STOP_SOCKET_CONNECTION_FAIL,
	STOP_SOCKET_CONNECTION_SUCCESS,
	TEST_ACTION,
} from '../AppActionTypes';
//constants
import { updateObject } from '../../../constants/Helpers';

const initialState = {
	connectionStatus: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_SOCKET_CONNECTION: {
			return updateObject(state, { connectionStatus: 'connecting' });
		}
		case START_SOCKET_CONNECTION_SUCCESS: {
			return updateObject(state, { connectionStatus: 'connected' });
		}
		case START_SOCKET_CONNECTION_FAIL: {
			return updateObject(state, { connectionStatus: 'connection failed' });
		}
		case STOP_SOCKET_CONNECTION: {
			return updateObject(state, { connectionStatus: 'disconnecting' });
		}
		case STOP_SOCKET_CONNECTION_SUCCESS: {
			return updateObject(state, { connectionStatus: 'disconnected' });
		}
		case STOP_SOCKET_CONNECTION_FAIL: {
			return updateObject(state, { connectionStatus: 'disconnection failed' });
		}
		default:
			return state;
	}
};

export default reducer;
