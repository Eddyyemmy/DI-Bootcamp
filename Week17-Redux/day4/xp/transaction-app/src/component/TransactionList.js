import React, { Component } from 'react';
import { ACTIONS } from '../actions/transactionAction';

export default class TableRow extends Component {
    handleDelete(id) {
        this.props.dispatch({ type: ACTIONS.DELETE, id: id });
    }

    selectTx = () => {
        console.log('edit');
        const tx = {
            id: this.props.id,
            fsc: this.props.fsc,
            accountNumber: this.props.accountNumber,
            name: this.props.name,
            amount: this.props.amount
        };
        this.props.dispatch({ type: ACTIONS.SET_ACTIVE, tx:tx })

    };
    render() {
        return (
        <>
                <span>{this.props.fsc}</span>
                <span>{this.props.accountNumber}</span>
                <span>{this.props.name}</span>
                <span>{this.props.amount}</span>
                <button onClick={this.selectTx}>Edit</button>
                <button onClick={() => this.handleDelete(this.props.id)}>Delete</button>
        </>
        )
    }
}
