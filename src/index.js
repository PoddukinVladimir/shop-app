import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import ProductsService from './services/products-service';
import {ProductsServiceProvider} from './components/products-service-context';

import ErrorBoundary from './components/hoc/error-boundary';
import App from './components/app';

const productsService = new ProductsService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ProductsServiceProvider value={productsService}>
                <Router>
                    <App />
                </Router>
            </ProductsServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
