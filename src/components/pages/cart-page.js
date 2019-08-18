import React from 'react';
import CartTable from '../cart-table';
import WithProducts from '../hoc/with-products';
import {connect} from 'react-redux';

const mapStateToProps = ({cart:{cartItems}}) => ({cartItems});

const CartPage = ({cartItems}) => {
    const content = cartItems.length
        ?
        <WithProducts>
            <CartTable />
        </WithProducts>
        : <h5>Your cart is empty...</h5>;

    return (
        <div>
            <h1 className="mb-4">Cart</h1>

            {content}
        </div>
    );
};

export default connect(mapStateToProps)(CartPage);