import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './app-header.css';

const mapStateToProps = ({cart:{totalCount, totalPrice}}) => {
    return {totalCount, totalPrice}
};

const AppHeader = ({totalCount, totalPrice}) => {
    const itemPlural = totalCount === 1 ? `item` : `items`;

    const cartTitle = () => {
        if (!totalCount || !totalPrice) return null;

        const title = ` ${totalCount} ${itemPlural} ($${totalPrice})`;

        return (
            <span className="text-success">{title}</span>
        )
    };

    return (
        <header className="app-header">
            <div className="app-header-container">
                <div className="app-logo">
                    <Link to="/">Shop App</Link>
                </div>

                <nav className="app-nav">
                    <Link to="/cart">
                        <i className="fa fa-shopping-cart"></i>
                        Cart
                        <span className="text-success">{cartTitle()}</span>
                    </Link>

                    <Link to="/create-item">
                        <strong>+</strong> New Item
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default connect(mapStateToProps)(AppHeader);