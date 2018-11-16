import React, { Component } from 'react'
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GroceryList from './GroceryList';
import * as groceryActions from '../../actions/groceryActions';

class ManageGroceryPage extends Component {
	state = {
			groceries: this.props.groceries
	};

	componentDidMount() {
		this.props.groceryActions.fetchGroceries();
	}

	componentDidUpdate(prevProps) {
		if(this.props.groceries.length !== prevProps.groceries.length) {
			this.setState({groceries: this.props.groceries});
		}
	}

	handleDelete = (id) => {
		this.props.groceryActions.deleteItem(id)
	}

	buyOrUnBuy = (id, updateItem) => {
		this.props.groceryActions.buyOrUnBuy(id, updateItem)
	}

	redirectToAddForm = () => {
    this.props.history.push('/add');
  };

	render() {
		return (
			<div>
				<GroceryList
					list={this.state.groceries}
					handleBuy={this.buyOrUnBuy}
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageGroceryPage);
