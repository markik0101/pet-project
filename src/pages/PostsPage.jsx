import React, {useState, useEffect} from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import PostsSearch from '../components/PostsSearch.jsx'

const PostsPage = () => {
	const [posts, setPosts] = useState([])
	const [searchParams, setSearchParams] = useSearchParams()

	const postQuery = searchParams.get('post') || ''

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => setPosts(data))
	}, [])

	return (
		<div>
			<h1>Posts</h1>

			<PostsSearch postQuery={postQuery} setSearchParams={setSearchParams} />

			<div className="posts">
				{
					posts
						.filter(
							post => post.title.includes(postQuery)
						)
						.map((post) => (
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