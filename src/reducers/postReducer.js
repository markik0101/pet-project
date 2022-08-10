const SET_POSTS = 'SET_POSTS'
const SET_POST = 'SET_POST'
const SET_IS_FETCHING = 'IS_FETCHING'
const SET_USERS = 'SET_USERS'

const defaultState = {
	posts: [],
	post: {},
	isFetching: true,
	users: [],
}

export default function postReducer(state = defaultState, action) {
	switch(action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: [...action.payload],
				isFetching: false,
			}
		case SET_POST:
			return {
				...state,
				post: action.payload,
				isFetching: false,
			}
		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.payload,
			}
		case SET_USERS:
			return {
				...state,
				users: [...action.payload],
				isFetching: false,
			}

		default:
			return state
	}
}

export const setPosts = (posts) => ({type: SET_POSTS, payload: posts})
export const setPost = (post) => ({type: SET_POST, payload: post})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setUsers = (users) => ({type: SET_USERS, payload: users})
