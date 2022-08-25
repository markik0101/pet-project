import React from 'react'
import {useSelector} from 'react-redux'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i)
	}

	const currentPage = useSelector(state => state.post.currentPage)

	return (
		<div>
			<ul className="pagination">
				{
					pageNumbers.map((number) => (
						<li className="page-item" key={number}>
							<button 
								className={
									currentPage === number 
										? 'page-link active-link' 
										: 'page-link'
								} 
								onClick={() => paginate(number)}>
								{number}
							</button>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default Pagination