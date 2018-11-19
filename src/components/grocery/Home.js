import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<section className="welcome_view">
			<div className="welcome_text">
				<h1 >Welcome Grocerify</h1>
				<h3>Keeping it 100% Groceries</h3>
				<Link className="start_btn" to="/Add">Get started</Link>
			</div>
		</section>
	);
};

export default Home;
