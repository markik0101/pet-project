import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => {


	return (
		<div>
			<h1>Oops page not found</h1>
			<div className="block-link">
				<div className="block-text">Are you lost, come back home</div>
				<Link to="/" className="not-found-link">to Home</Link>
			</div>
			
		</div>
	)
}

export default NotFoundPage