import React from 'react';

const AddItemForm = ({ handleChange, handleSubmit }) => {
	return (
		<div className="form">
			<span className="form_text">Add Grocery Item</span>
			<br/>
			<form>
				<input
					type="text"
					name="name"
					placeholder="Item Name"
					onChange={handleChange}
				/>
				<br/>
				<input
					type="submit"
					value="Save"
					className="btn btn-primary submit"
					onClick={handleSubmit}
				/>
			</form>
		</div>
	);
};

export default AddItemForm;
