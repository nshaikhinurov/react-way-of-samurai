const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE = 'SEND_MESSAGE'

export const changeMessageTextCreator = text => ({ type: CHANGE_NEW_MESSAGE_TEXT, text })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

const initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Valera' },
		{ id: 5, name: 'Dasha' },
		{ id: 6, name: 'Konstantin' },
	],
	messages: [
		{ id: 1, message: 'message from Dimych' },
		{ id: 2, message: 'message from Andrey' },
		{ id: 3, message: 'message from Sveta' },
		{ id: 4, message: 'message from Valera' },
		{ id: 5, message: 'message from Dasha' },
		{ id: 6, message: 'message from Konstantin' },
	],
}

const dialogsPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.text,
			}

		case SEND_MESSAGE:
			const newMessage = {
				id: state.messages.length + 1,
				message: state.newMessageText,
			}
			return {
				...state,
				messages: [...state.messages, newMessage],
				newMessageText: '',
			}

		default:
			return state
	}
}

export default dialogsPageReducer
