import React, {Component} from 'react';
import ErrorOverlay from '../error-overlay';

class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err) {
        this.setState({
            hasError: true
        })
    }

    render() {
        const {hasError} = this.state;

        const result = hasError
            ? <ErrorOverlay />
            : this.props.children;

        return (
            <div>
                {result}
            </div>
        )
    }
}

export default ErrorBoundary;