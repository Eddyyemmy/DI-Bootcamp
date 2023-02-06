import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTIONS } from '../actions/transactionAction';
import TableRow from './TransactionList';
import "./TransactionForm.css";

class TransactionForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = {};
    for(const entry of formData){
      // const key = entry[0];
      // const value = entry[1];
      const [key, value] = entry
      payload[key] = value;
    }
    if (this.props.selectedTx != null) {
      const id = this.props.selectedTx.id;
      this.props.dispatch({ type: ACTIONS.UPDATE, payload: { ...payload, id} });
    } else {
          this.props.dispatch({ type: ACTIONS.ADD, payload });
    }
    this.props.dispatch({ type: ACTIONS.RESET_SELECTED });
    form.reset();
  };
  render() {
    return (
      <div>
        <h1>Financial Transaction:</h1>
        <div className='container'>
          <form action="" onSubmit={this.handleSubmit}>
              <input 
                type="text" 
                name="fsc" 
                id="fsc" 
                placeholder="FSC"               
                defaultValue={this.props.selectedTx?.fsc}
              />
              <input 
                type="text" 
                name="accountNumber" 
                id="accountNumber" 
                placeholder="accountNumber"               
                defaultValue={this.props.selectedTx?.accountNumber}
              />
              <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="name"
                defaultValue={this.props.selectedTx?.name}
              />
              <input 
                type="text" 
                name="amount" 
                id="amount" 
                placeholder="amount" 
                defaultValue={this.props.selectedTx?.amount}
              />
              <input type="submit" value="Submit" />
          </form>
          {this.props.transactions.length === 0 && <div> No transaction here! </div>}
          {this.props.transactions.length > 0 && (
            <div id="transactions">
              <span>FSC</span>
              <span>Account Number</span>
              <span>Name</span>
              <span>Amount</span>
              <span>Edit</span>
              <span>Delete</span>
              {this.props.transactions.map((tx) => (
                <TableRow 
                  key={tx.id}  
                  {...tx} 
                  dispatch={this.props.dispatch} 
                />
              ))}
            
            </div>
          )}
          {/* Current id selected: {this.props.selectedTx?.id} */}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { 
    transactions: state.transactions,
    selectedTx: state.selectedTx
  }
};

export default connect(mapStateToProps)(TransactionForm)