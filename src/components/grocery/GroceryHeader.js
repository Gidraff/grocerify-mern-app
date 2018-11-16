import React from 'react';
import Button from '@material-ui/core/Button';
const GroceryHeader = (props) => {
	return (
		<header>
			<div className="title cart">
				<b>Groceries:
					<button
						className="btn btn-primary"
						onClick={props.handleClick}
						type="button" ><b>Add+</b>
					</button>
				</b>
				<i className="fas fa-cart-plus fa-lg "></i>
			</div>
			{/* <i className="fas fa-cart-plus fa-lg cart"></i> */}
		</header>
	);
};

export default GroceryHeader;
