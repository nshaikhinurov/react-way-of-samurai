import { connect } from 'react-redux'
import { addNewPostActionCreator, changeNewPostTextActionCreator } from '../../../redux/profilePageReducer'
import MyPosts from './MyPosts'

const mapStateToProps = state => ({
	posts: state.profilePage.posts,
	newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = dispatch => ({
	addPost: () => {
		dispatch(addNewPostActionCreator())
	},
	changeNewPostText: text => {
		dispatch(changeNewPostTextActionCreator(text))
	},
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
