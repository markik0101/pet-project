import React, {useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getPost} from '../components/actions/posts.js'


const SinglePage = () => {
	const {id} = useParams()
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const post = useSelector(state => state.post.post)
	const isFetching = useSelector(state => state.post.isFetching)

	useEffect(() => {
		dispatch(getPost(id))
	}, [id])

	function goBack() {
		navigate(-1)
	}

	return (
		<div>
			{	
				isFetching === false
				?
				post && (
					<>
						<h1>{post.title}</h1>
						<div className="post">{post.body}</div>
					</>
				)
				:
				<div className="fetching">

				</div>
			}
			<div className="block-btn">
				<button onClick={() => goBack()}>to Back</button>
			</div>
		</div>
	)
}

export default SinglePage