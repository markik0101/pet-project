import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUsers} from '../components/actions/posts.js'

const HomePage = () => {
	const dispatch = useDispatch()
	const users = useSelector(state => state.post.users)
	const isFetching = useSelector(state => state.post.isFetching)

	useEffect(() => {
		dispatch(getUsers())
	}, [])

	return (
		<div>
			<h1>Our authors</h1>
			
			{	
				isFetching === false
				?
				<div className="authors_block">
				{
					users.
						map(user => 
							<div key={user.id} className="author">
								<div>{user.name}</div>
								<div>{user.email}</div>
								<div>{user.phone}</div>
								<div>{user.website}</div>
							</div>
						)
				}
				</div>
				:
					<div className="fetching">

					</div>
			}
		</div>
	)
}

export default HomePage