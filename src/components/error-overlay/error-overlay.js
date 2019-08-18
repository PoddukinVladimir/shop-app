import React from 'react';
import './error-overlay.css';

const ErrorOverlay = () => {
    return (
        <div className="card card-default">
            <h1 className="text-danger">Oops, some error has occurred</h1>
        </div>
    );
};

export default ErrorOverlay;