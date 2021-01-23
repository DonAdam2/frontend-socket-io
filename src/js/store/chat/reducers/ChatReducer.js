//constants
import { updateObject } from '../../../constants/Helpers';
//action types
import { SEND_MESSAGE, SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS } from '../chatActionTypes';

const initialState = {
	messageStatus: '',
	messages: [],
	feedback: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return updateObject(state, { messageStatus: 'Sending message' });
		}
		case SEND_MESSAGE_SUCCESS: {
			console.log(action.result);
			return updateObject(state, { messageStatus: 'Sent message' });
		}
		case SEND_MESSAGE_FAIL: {
			return updateObject(state, { messageStatus: 'send failed' });
		}
		default:
			return state;
	}
};

export default reducer;
