import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogItem = ({ id, name }) => {
	return (
		<NavLink to={`/dialogs/${id}`} className={styles.dialog}>
			{name}
		</NavLink>
	)
}

const Message = ({ message }) => {
	return <div className={styles.message}>{message}</div>
}

const Dialogs = ({ data, сhangeMessageText, sendMessage }) => {
	const { dialogs, messages } = data
	const messageElement = React.createRef()

	const onСhangeMessageText = () => {
		сhangeMessageText(messageElement.current.value)
	}

	const sendMessageHandler = () => {
		sendMessage()
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogItems}>
				{dialogs.map(({ id, name }) => (
					<DialogItem id={id} name={name} />
				))}
			</div>
			<div className={styles.messages}>
				{messages.map(({ id, message }) => (
					<Message message={message} />
				))}
			</div>
			<div className={styles.sendMessage}>
				<textarea ref={messageElement} value={data.newMessageText} onChange={onСhangeMessageText} />
				<button onClick={sendMessageHandler}>Send message</button>
			</div>
		</div>
	)
}

export default Dialogs
