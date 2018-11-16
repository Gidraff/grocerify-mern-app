import React from 'react';
import GroceryListItem from './GroceryListItem';
import GroceryHeader from './GroceryHeader';


const GroceryList = ({ list, handleDelete, handleClick, handleBuy}) => {
	return(
		<div className="list_container">
			<GroceryHeader
				handleClick={handleClick}/>
			<hr/>
			<GroceryListItem
				handleBuy={handleBuy}
				handleDelete={handleDelete}
				list={list}/>
		</div>
	);
};

export default GroceryList;
