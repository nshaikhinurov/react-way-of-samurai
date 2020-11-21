import { connect } from 'react-redux'
import { changeMessageTextCreator, sendMessageCreator } from '../../redux/dialogsPageReducer'
import Dialogs from './Dialogs'

const mapStateToProps = state => ({
	data: state.dialogsPage,
})

const mapDispatchToProps = dispatch => ({
	сhangeMessageText: text => {
		dispatch(changeMessageTextCreator(text))
	},
	sendMessage: () => {
		dispatch(sendMessageCreator())
	},
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
