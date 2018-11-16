import React, { Component } from 'react';
import AddItemForm from './AddItemForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GroceryList from './GroceryList';
import * as groceryActions from '../../actions/groceryActions';

class GroceryPage extends Component {

  state = {
    errors: {},
    newItem: {
      name: "",
      isBought: false
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log("cghvjbnk", e.target.value);
    let newItem = Object.assign({}, this.state.newItem);
    newItem[e.target.name] = e.target.value
    return this.setState({ newItem })
  }

  saveGroceryItem = (e) => {
    e.preventDefault();
    const { newItem } = this.state
    console.log("chgvjbnkm==", newItem);
    this.props.groceryActions.addGroceryItem(newItem);
    this.props.history.push('/groceries');
  }

	render() {
		return (
			<div>
				<AddItemForm
          handleChange={this.handleChange}
          handleSubmit={this.saveGroceryItem}
        />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	groceries: state.groceries
});

const mapDispatchToProps = (dispatch) => ({
	groceryActions: bindActionCreators(groceryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GroceryPage);
