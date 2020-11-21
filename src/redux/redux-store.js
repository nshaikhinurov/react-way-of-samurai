import { combineReducers, createStore } from 'redux'
import dialogsPageReducer from './dialogsPageReducer'
import profilePageReducer from './profilePageReducer'
import sidebarReducer from './sidebarReducer'

const store = createStore(
	combineReducers({
		profilePage: profilePageReducer,
		dialogsPage: dialogsPageReducer,
		sidebar: sidebarReducer,
	})
)

export default store
