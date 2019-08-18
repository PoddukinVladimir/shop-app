import React from 'react';
import './cart-table.css';
import {connect} from 'react-redux';
import {
    addedToCart,
    removedFromCart,
    itemsRemovedFromCart,
    clearCart
} from '../../actions';
import {Table} from 'react-bootstrap'

const mapStateToProps = ({cart: {cartItems, totalPrice}}) => {
    return {cartItems, totalPrice}
};

const mapDispatchToProps = {
    onDecrease: removedFromCart,
    onIncrease: addedToCart,
    onDelete: itemsRemovedFromCart,
    onCartCleared: clearCart
};

const CartTable = ({cartItems, totalPrice, onDecrease, onIncrease, onDelete, onCartCleared, showAlert}) => {
    const renderRow = (cartItem, idx) => {
        const { id, name, count, total } = cartItem;

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <div className="pull-right">
                        <button onClick={() => onDecrease(id)}
                                className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle"></i>
                        </button>
                        <button onClick={() => onIncrease(id)}
                                className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle"></i>
                        </button>
                        <button onClick={() => onDelete(id)}
                                className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        )
    };

    const checkout = () => {
        const userChoice = window.confirm(`Are you sure you want to buy these items?`);
        if (!userChoice) return;
        onCartCleared();

    };

    return (
        <div className="cart-table mt-5">
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {cartItems.map(renderRow)}
                </tbody>
            </Table>

            <div className="total">
                Total Price: ${totalPrice}
            </div>

            <button
                onClick={checkout}
                className="btn btn-success mt-4 float-right"
            >
                Checkout
            </button>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);