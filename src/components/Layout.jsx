import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

function Layout() {
	return (
		<div>
			<header>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/posts'>Posts</NavLink>
				<NavLink to='/about'>About</NavLink>
			</header>

			<main className="container">
				<Outlet />
			</main>

			<footer>
				<p>Mark Manukyan | 2022</p>
			</footer>
		</div>
	)
}

export default Layout