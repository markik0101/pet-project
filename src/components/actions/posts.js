import {setPosts} from '../../reducers/postReducer.js'

export const getPosts = () => {
	return async(dispatch) => {
		const data = await fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			
		dispatch(setPosts(data))		
	}
}