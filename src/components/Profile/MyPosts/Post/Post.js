import React from 'react'
import styles from './Post.module.css'

const Post = ({ message, likesCount }) => {
	return (
		<div className={styles.item}>
			<img src="https://instamir.info/wp-content/uploads/2019/04/instami-avatarka-v-instagram-11.png" />
			<div>{message}</div>
			<div>likes count: {likesCount}</div>
		</div>
	)
}

export default Post
