import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setSearch} from '../reducers/postReducer.js'

const PostsSearch = ({postQuery, setSearchParams}) => {

	// const [search, setSearch] = useState(postQuery)

	const dispatch = useDispatch()
	const search = useSelector(state => state.post.search)

	const handleSubmit = (e) => {
		e.preventDefault()

		const form = e.target
		const query = form.search.value

		const params = {}

		if (query.length) params.post = query

		setSearchParams(params)
	}

	return (
		<form autoComplete='off' onSubmit={handleSubmit} className="form">
			<input 
				type="search" 
				name="search" 
				value={search} 
				onChange={e => dispatch(setSearch(e.target.value))}
				className="input-search"
				placeholder="Search"
			/>
			<input type="submit" value="Search" className="sub-btn" />
		</form>
	)
}

export default PostsSearch