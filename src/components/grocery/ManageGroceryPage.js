import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import GroceryList from './GroceryList';
import * as groceryActions from '../../actions/groceryActions';

class ManageGroceryPage extends Component {

	componentDidMount() {
		this.props.groceryActions.fetchGroceries();
	}

	componentDidUpdate(prevProps) {
		if(this.props.groceries !== prevProps.groceries) {
			this.setState({groceries: this.props.groceries});
		}
	}

	handleDelete = (id) => {
		this.props.groceryActions.deleteItem(id)
	}

	handleBuyOrDrop = (id) => {
		this.props.groceryActions.buyOrDrop(id)
	}

	redirectToAddForm = () => {
    this.props.history.push('/Add');
  };

	render() {
		if(this.props.groceries.length < 0) {
			return (
				<div>
					<span>No Groceries available</span>
				</div>
			)
		}
		return (
			<div>
				<GroceryList
					groceries={this.props.groceries}
					handleBuy={this.handleBuyOrDrop}
					handleDelete={this.handleDelete}
					handleClick={this.redirectToAddForm}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageGroceryPage))
