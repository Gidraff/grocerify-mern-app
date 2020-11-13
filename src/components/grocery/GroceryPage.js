import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import * as groceryActions from '../../actions/groceryActions';

class GroceryPage extends Component {

  state = {
    errors: {},
    name: "",
    isBought: false
  }

  handleChange = (e) => {
    e.preventDefault();
    return this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    if(!this.canBeSubmitted()) {
      e.preventDefault();
      return;
    }
    const { name, isBought } = this.state
    this.props.groceryActions.addGroceryItem({ name, isBought})
    this.props.history.push('/groceries');
    swal('Done!', 'Action was successful!', 'success');
  }

  canBeSubmitted = () => {
    const { name, isBought } = this.state;
    return (
      name.length > 5 && !isBought
    )
  }

	render() {
    const isEnable = this.canBeSubmitted()
		return (
      <div className="form">
  			<span className="form_text">Add Grocery Item</span>
  			<br/>
  			<form onSubmit={this.handleSubmit}>
  				<input
            autoFocus
  					type="text"
  					name="name"
  					placeholder="Item Name"
  					onChange={this.handleChange}
  				/>
  				<br/>
  				<br />
  				<button
            type="submit"
            disabled={!isEnable}
            value="Save"
            className="btn btn-primary submit">
              Save
            </button>
  			</form>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GroceryPage));
