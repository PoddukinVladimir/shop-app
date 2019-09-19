import React, {useState} from 'react';
import './cart-table.css';
import {connect} from 'react-redux';
import {
    addedToCart,
    removedFromCart,
    itemsRemovedFromCart,
    clearCart
} from '../../actions';
import {Table, Modal, Button} from 'react-bootstrap'

const mapStateToProps = ({cart: {cartItems, totalPrice}}) => {
    return {cartItems, totalPrice}
};

const mapDispatchToProps = {
    onDecrease: removedFromCart,
    onIncrease: addedToCart,
    onDelete: itemsRemovedFromCart,
    onCartCleared: clearCart
};

const CartTable = ({cartItems, totalPrice, onDecrease, onIncrease, onDelete, onCartCleared}) => {
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
                            <i className="fa fa-minus-circle" />
                        </button>
                        <button onClick={() => onIncrease(id)}
                                className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle" />
                        </button>
                        <button onClick={() => onDelete(id)}
                                className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash" />
                        </button>
                    </div>
                </td>
            </tr>
        )
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

            <Button
                variant="success"
                onClick={handleShow}
                className="mt-4 float-right"
            >
                Checkout
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to buy these items?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        onCartCleared();
                        handleClose();
                    }}>
                        Buy
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);