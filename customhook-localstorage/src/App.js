import React, { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

import './App.css';

const App = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useLocalStorage('user', '');

	const submitHandler = () => {
		setUser(name);
		console.log('Submited: ', name);
	};

	const clearHandler = () => {
		setUser('');
	};

	return (
		<div>
			<div>
				<form>
					<input
						type="text"
						placeholder="Type your name."
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button onClick={submitHandler}>Send</button>
					<button onClick={clearHandler}>Clear</button>
				</form>
			</div>
			{user && (
				<div>
					<p>Hey there {user}</p>
				</div>
			)}
			<div>
				<button onClick={() => window.location.reload(false)}>
					Refresh Page
				</button>
			</div>
		</div>
	);
};

export default App;
