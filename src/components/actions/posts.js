import {setPosts} from '../../reducers/postReducer.js'
import {setPost, setIsFetching, setUsers} from '../../reducers/postReducer.js'

export const getPosts = () => {
	return async(dispatch) => {
		dispatch(setIsFetching(true))
		const data = await fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			
		dispatch(setPosts(data))		
	}
}

export const getPost = (id) => {
	return async(dispatch) => {
		dispatch(setIsFetching(true))
		const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())

		dispatch(setPost(data))
	}
}

export const getUsers = () => {
	return async(dispatch) => {
		dispatch(setIsFetching(true))
		const data = await fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			
		dispatch(setUsers(data))	
	}
}