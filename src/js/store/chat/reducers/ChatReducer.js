//constants
import { updateObject } from '../../../constants/Helpers';
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
		case SEND_IS_TYPING: {
			return state;
		}
		case GET_IS_TYPING: {
			return state;
		}
		case GET_IS_TYPING_SUCCESS: {
			console.log('GET_IS_TYPING_SUCCESS ', action.result);
			return state;
		}
		case GET_IS_TYPING_FAILED: {
			console.log('error', action.error);
			return state;
		}
		case SET_FEEDBACK: {
			return updateObject(state, { feedback: action.feedback });
		}
		default:
			return state;
	}
};

export default reducer;
