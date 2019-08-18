import React from 'react';
import ProductsListItem from '../products-list-item';
import {connect} from 'react-redux';
import {addedToCart} from '../../actions';
import {Row, Col} from 'react-bootstrap';
import {createSelector} from 'reselect';

import './products-list.css';

const getProducts = (state) => state.productList.products;

const getVisibleProductsSelector = createSelector(
    [getProducts],
    (products) => {
        return products.filter((product) => product.visible)
    }
);

const mapStateToProps = (state) => {
    return {
        products: getVisibleProductsSelector(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToCart: (id) => {
            dispatch(addedToCart(id));
        }
    }
};

const ProductsList = ({products, onAddedToCart}) => {

    return (
        <Row
            as="ul"
            className="list-unstyled mt-3"
        >
            {
                products.map((product) => {
                    return (
                        <Col
                            as="li"
                            lg={6}
                            className="mt-5 pl-4"
                            key={product.id}
                        >
                            <ProductsListItem
                                onAddedToCart={
                                    () => onAddedToCart(product.id)
                                }
                                product={product}
                            />
                        </Col>
                    )
                })
            }
        </Row>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);