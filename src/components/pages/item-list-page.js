import React from 'react';
import ProductsList from '../products-list';
import WithProducts from '../hoc/with-products';

const ItemListPage = () => {

    return (
        <div>
            <h1>Item List</h1>

            <WithProducts>
                <ProductsList />
            </WithProducts>
        </div>
    );
};

export default ItemListPage;