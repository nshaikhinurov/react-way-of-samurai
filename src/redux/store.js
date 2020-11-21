import dialogsPageReducer from './dialogsPageReducer'
import profilePageReducer from './profilePageReducer'

const store = {
	_state: {
		profilePage: {
			newPostText: '',
			posts: [
				{ id: 1, message: 'Hey, waz up?', likesCount: 12 },
				{ id: 2, message: "It's my first post", likesCount: 11 },
				{ id: 3, message: 'message from Sveta', likesCount: 10 },
				{ id: 4, message: 'message from Valera', likesCount: 121 },
				{ id: 5, message: 'message from Dasha', likesCount: 34 },
			],
		},
		dialogsPage: {
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
		},
		sidebar: {},
	},
	_callSubscriber() {},

	getState() {
		return this._state
	},

	subscribe(observer) {
		this._callSubscriber = observer
	},

	dispatch(action) {
		this._state.profilePage = profilePageReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

		this._callSubscriber(this)
	},
}

export default store
