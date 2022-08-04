import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'


const SinglePage = () => {
	const {id} = useParams()
	const [post, setPost] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(response => response.json())
			.then(data => setPost(data))
	}, [id])

	function goBack() {
		navigate(-1)
	}

	return (
		<div>
			{
				post && (
					<>
						<h1>{post.title}</h1>
						<div className="post">{post.body}</div>
					</>
				)
			}
			<div className="block-btn">
				<button onClick={() => goBack()}>to Back</button>
			</div>
		</div>
	)
}

export default SinglePage