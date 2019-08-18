import React from 'react';

const {
    Provider: ProductsServiceProvider,
    Consumer: ProductsServiceConsumer
} = React.createContext();

export {
    ProductsServiceProvider,
    ProductsServiceConsumer
};