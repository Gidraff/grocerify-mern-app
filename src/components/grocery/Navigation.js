import React from 'react';
import { Link } from 'react-router-dom';

const Span = () => (<span> | </span>);

const NavBar = () => {
	return (
		<div className="nav_menu">
			<Link className="nav_link" to="/">Home</Link> <Span />
			<Link className="nav_link" to="/Groceries">Groceries</Link>
		</div>
	);
};

export default NavBar;
