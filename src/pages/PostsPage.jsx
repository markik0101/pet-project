import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const PostsPage = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setPosts(data))
	}, [])

	return (
		<div>
			<h1>Posts</h1>

			<div className="posts">
				{
					posts.map((post) => (
						<Link key={post.id} to={`/posts/${post.id}`} className="black">
							<li>{post.title}</li>
						</Link>
					))
				}
			</div>
		</div>
	)
}

export default PostsPage