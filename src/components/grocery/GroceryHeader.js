import React from 'react';
const GroceryHeader = ({handleClick}) => {
	return (
		<header>
			<div className="title cart">
				<button
					className="btn btn-light"
					onClick={handleClick}
					type="button" ><b>New Item</b>
				</button>
				<i className="fas fa-cart-plus fa-lg "></i>
			</div>
		</header>
	);
};

export default GroceryHeader;
