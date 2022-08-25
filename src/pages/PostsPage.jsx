import React, {useEffect} from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import PostsSearch from '../components/PostsSearch.jsx'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../components/actions/posts.js'
import {setCurrentPage} from '../reducers/postReducer.js'
import Pagination from '../components/Pagination.jsx'

const PostsPage = () => {
	const dispatch = useDispatch()
	const posts = useSelector(state => state.post.posts)
	const isFetching = useSelector(state => state.post.isFetching)
	const currentPage = useSelector(state => state.post.currentPage)


	const [searchParams, setSearchParams] = useSearchParams()

	const postQuery = searchParams.get('post') || ''


	useEffect(() => {
		dispatch(getPosts())
	}, [])


	const postsPerPage = 10

	const lastPostsIndex = currentPage * postsPerPage
	const firstPostsIndex = lastPostsIndex - postsPerPage
	const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex)


	const paginate = pageNumber => dispatch(setCurrentPage(pageNumber))
	
	return (
		<div>
			<h1>Posts</h1>

			<PostsSearch postQuery={postQuery} setSearchParams={setSearchParams} />

			<div className="posts">
				{

					isFetching === false
					?
						currentPosts
							.filter(
								post => post.title.includes(postQuery)
							)
							.map((post, i) => 
								<Link key={post.id} to={`/posts/${post.id}`} className="black">
									<li>{post.title}</li>
								</Link>

							)
					:
						<div className="fetching">

						</div>

				}
			</div>

			<Pagination 
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				paginate={paginate}
			/>
			
		</div>
	)
}

export default PostsPage