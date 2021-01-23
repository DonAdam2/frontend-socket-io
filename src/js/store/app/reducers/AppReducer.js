//action types
import {
	SEND_MESSAGE,
	SEND_MESSAGE_FAIL,
	SEND_MESSAGE_SUCCESS,
	START_SOCKET_CONNECTION,
	START_SOCKET_CONNECTION_FAIL,
	START_SOCKET_CONNECTION_SUCCESS,
	TEST_ACTION,
} from '../appActionTypes';
//constants
import { updateObject } from '../../../constants/Helpers';

const initialState = {
	testString: 'Initial test',
	connectionStatus: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST_ACTION:
			return updateObject(state, { testString: 'Final test' });
		case START_SOCKET_CONNECTION: {
			return updateObject(state, { connectionStatus: 'connecting' });
		}
		case START_SOCKET_CONNECTION_SUCCESS: {
			return updateObject(state, { connectionStatus: 'connected' });
		}
		case START_SOCKET_CONNECTION_FAIL: {
			return updateObject(state, { connectionStatus: 'connection failed' });
		}
		case SEND_MESSAGE: {
			return updateObject(state, { connectionStatus: 'Sending message' });
		}
		case SEND_MESSAGE_SUCCESS: {
			console.log(action.result);
			return updateObject(state, { connectionStatus: 'Sent message' });
		}
		case SEND_MESSAGE_FAIL: {
			return updateObject(state, { connectionStatus: 'send failed' });
		}
		default:
			return state;
	}
};

export default reducer;
