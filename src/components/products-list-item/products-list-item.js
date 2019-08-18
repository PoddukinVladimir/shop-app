import React from 'react';
import {Media} from 'react-bootstrap';

import './products-list-item.css';

const ProductsListItem = ({product, onAddedToCart}) => {
    const noImageSrc = `http://keivconnect.com/static/images/logo3.png`;
    const {name, description, price, img = noImageSrc} = product;

    return (
        <Media className="products-list-item">
            <img
                width={100}
                height={150}
                src={img}
                alt={`Product: ${name}`}
                className="mr-3"
            />

            <Media.Body>
                <h5>
                    {name}
                    <span className="text-primary"> (${price})</span>
                </h5>

                <p>
                    {description}
                </p>

                <button
                    onClick={onAddedToCart}
                    className="btn btn-outline-primary"
                >
                    Add To Cart
                </button>
            </Media.Body>
        </Media>
    )
};

export default ProductsListItem;