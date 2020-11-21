import React from 'react'
import Post from './Post/Post'

const MyPosts = ({ posts, newPostText, addPost, changeNewPostText }) => {
	const newPostElement = React.createRef()

	const addPostHandler = () => {
		addPost()
	}

	const onNewPostChange = () => {
		changeNewPostText(newPostElement.current.value)
	}

	return (
		<div>
			My Posts
			<div>
				<textarea ref={newPostElement} value={newPostText} onChange={onNewPostChange} />
				<button onClick={addPostHandler}>Add post</button>
			</div>
			<div>new post</div>
			<div>
				{posts.map(post => (
					<Post message={post.message} likesCount={post.likesCount} />
				))}
			</div>
		</div>
	)
}

export default MyPosts
