import React from 'react';
import {connect} from 'react-redux';

import './alerts.css';

const mapStateToProps = ({alertList:{alerts}}) => ({alerts});

const Alerts = ({alerts}) => {
    const renderAlerts = () => {
        return alerts.map((alert) => {
            return (
                <li
                    key={alert.id}
                    className="alert alert-success"
                >
                    <strong>{alert.text}</strong>
                </li>
            )
        })
    };

    return (
        <ul className="alerts list-unstyled">
            {renderAlerts()}
        </ul>
    );
};

export default connect(mapStateToProps)(Alerts);