import React from 'react';

const GroceryListItem = ({ handleDelete, list, handleBuy }) => {
	const listItem = list.map(item => {
		return (
			<li className={item.isBought ?  'bought_style' : 'list_item' }
				key={item._id}><b>{item.name}</b>
				<div className="btn_container">
					<button onClick={() => handleBuy(item._id, item) }type="button" className="btn btn-info">Buy</button>
					<button onClick={() => handleDelete(item._id)} type="button" className="btn btn-secondary">X</button>
				</div>
			</li>
		);
	});
	return (
		<ul className="list">{listItem}</ul>
	);
};

export default GroceryListItem;
