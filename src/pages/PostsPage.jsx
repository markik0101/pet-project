import React, {useEffect} from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import PostsSearch from '../components/PostsSearch.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../components/actions/posts.js'

const PostsPage = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.post.posts)
	const isFetching = useSelector(state => state.post.isFetching)

	const [searchParams, setSearchParams] = useSearchParams()

	const postQuery = searchParams.get('post') || ''


	useEffect(() => {
		dispatch(getPosts())
	}, [])

	return (
		<div>
			<h1>Posts</h1>

			<PostsSearch postQuery={postQuery} setSearchParams={setSearchParams} />

			<div className="posts">
				{

					isFetching === false
					?
						posts
							.filter(
								post => post.title.includes(postQuery)
							)
							.map((post) => 
								<Link key={post.id} to={`/posts/${post.id}`} className="black">
									<li>{post.title}</li>
								</Link>

							)
					:
						<div className="fetching">

						</div>

				}
			</div>
		</div>
	)
}

export default PostsPage