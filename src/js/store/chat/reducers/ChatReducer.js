//constants
import { updateObject } from '../../../constants/Helpers';
//lodash
import { cloneDeep } from 'lodash';
//action types
import {
	FETCH_TYPING_USERNAME,
	FETCH_TYPING_USERNAME_FAILED,
	FETCH_TYPING_USERNAME_SUCCESS,
	SEND_TYPING_USERNAME,
	SEND_MESSAGE,
	SEND_MESSAGE_FAIL,
	SEND_MESSAGE_SUCCESS,
	SAVE_RECEIVED_TYPING_USERNAME,
	SAVE_RECEIVED_MESSAGES,
	FETCH_MESSAGES,
	FETCH_MESSAGES_SUCCESS,
	FETCH_MESSAGES_FAIL,
} from '../chatActionTypes';

const initialState = {
	messageStatus: '', //ideally it should come from the BE
	messages: [],
	typingUsername: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			return updateObject(state, { messageStatus: 'Sending' });
		}
		case SEND_MESSAGE_SUCCESS: {
			console.log(action.result);
			return updateObject(state, { messageStatus: 'Sent' });
		}
		case SEND_MESSAGE_FAIL: {
			console.log(action.error);
			return updateObject(state, { messageStatus: 'Failed' });
		}
		case FETCH_MESSAGES: {
			return state;
		}
		case FETCH_MESSAGES_SUCCESS: {
			return state;
		}
		case FETCH_MESSAGES_FAIL: {
			return state;
		}
		case SAVE_RECEIVED_MESSAGES: {
			const messages = cloneDeep(state.messages);
			messages.push(action.messages);
			return updateObject(state, { messages, typingUsername: '' });
		}
		case SEND_TYPING_USERNAME: {
			return state;
		}
		case FETCH_TYPING_USERNAME: {
			return state;
		}
		case FETCH_TYPING_USERNAME_SUCCESS: {
			console.log('GET_IS_TYPING_SUCCESS ', action.result);
			return state;
		}
		case FETCH_TYPING_USERNAME_FAILED: {
			console.log('error', action.error);
			return state;
		}
		case SAVE_RECEIVED_TYPING_USERNAME: {
			return updateObject(state, { typingUsername: action.username });
		}
		default:
			return state;
	}
};

export default reducer;
