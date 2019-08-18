import React from 'react';
import {ProductsServiceConsumer} from '../products-service-context';

const withProductsService = (mapMethodsToProps = () => {}) => (Wrapped) => (props) => {
    return (
        <ProductsServiceConsumer>
            {
                (productsService) => {
                    const serviceProps = mapMethodsToProps(productsService);

                    return (
                        <Wrapped {...props} {...serviceProps} />
                    )
                }
            }
        </ProductsServiceConsumer>
    )
};

export default withProductsService;