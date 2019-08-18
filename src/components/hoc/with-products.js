import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorOverlay from '../error-overlay';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {productsRequested, productsError, productsLoaded} from '../../actions';
import withProductsService from '../hoc/with-products-service';

const mapStateToProps = ({productList: {loading, error}}) => {
    return {
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllProducts: () => {
            dispatch(productsRequested());
            ownProps.getAllProductsFromService()
                .then((data) => dispatch(productsLoaded(data)))
                .catch((err) => dispatch(productsError(err)));
        }
    }
};

const mapMethodToProps = (productsService) => {
    return {
        getAllProductsFromService: productsService.getAllProducts,
    }
};

class WithProducts extends Component {
        componentDidMount() {
            const {loading, getAllProducts} = this.props;

            // loading items once per page reload (demonstration purposes)
            if (loading) {
                getAllProducts();
            }
        }

        render() {
            const { loading, error } = this.props;

            if (loading) {
                return <Spinner />;
            }

            if (error) {
                return <ErrorOverlay />;
            }

            return React.cloneElement(this.props.children, { ...this.props });
        }
}

export default compose(
    withProductsService(mapMethodToProps),
    connect(mapStateToProps, mapDispatchToProps)
)(WithProducts);
