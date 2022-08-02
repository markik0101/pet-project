import React, {useState} from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>Add</button>
			<button onClick={() => setCount(count - 1)}>Take away</button>
		</div>
	)
}

export default Counter