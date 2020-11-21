const ADD_NEW_POST = 'ADD_NEW_POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST })
export const changeNewPostTextActionCreator = text => ({ type: CHANGE_NEW_POST_TEXT, text })

const initialState = {
	newPostText: '',
	posts: [
		{ id: 1, message: 'Hey, waz up?', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 11 },
		{ id: 3, message: 'message from Sveta', likesCount: 10 },
		{ id: 4, message: 'message from Valera', likesCount: 121 },
		{ id: 5, message: 'message from Dasha', likesCount: 34 },
	],
}

const profilePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_POST:
			const newPost = {
				id: state.posts.length + 1,
				likesCount: 0,
				message: state.newPostText,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			}

		case CHANGE_NEW_POST_TEXT:
			return {
				...state,
				newPostText: action.text,
			}

		default:
			return state
	}
}

export default profilePageReducer
