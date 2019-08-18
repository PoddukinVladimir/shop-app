import React from 'react';
import ProductForm from '../product-form';
import {Row, Col} from 'react-bootstrap';
import WithProducts from '../hoc/with-products';

const NewItemPage = () => {

    return (
        <div>
            <h1>Add New Product</h1>

            <Row className="mt-4">
                <Col md={{span: 6, offset: 3}}>
                    <WithProducts>
                        <ProductForm/>
                    </WithProducts>
                </Col>
            </Row>

        </div>
    );
};

export default NewItemPage;