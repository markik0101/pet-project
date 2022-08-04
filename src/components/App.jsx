import './app.less'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout.jsx'
import HomePage from '../pages/HomePage.jsx'
import PostsPage from '../pages/PostsPage.jsx'
import AboutPage from '../pages/AboutPage.jsx'
import SinglePage from '../pages/SinglePage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />}></Route>
					<Route path="posts" element={<PostsPage />}></Route>
					<Route path='posts/:id' element={<SinglePage />}></Route>
					<Route path="about" element={<AboutPage />}></Route>
					<Route path="*" element={<NotFoundPage />}></Route>
				</Route>
			</Routes>
		</div>
	)
}

export default App