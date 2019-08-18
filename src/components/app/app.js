import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import AppHeader from '../app-header';
import Alerts from '../alerts';
import {
    ItemListPage,
    NewItemPage,
    CartPage
} from '../pages';

import './app.css';

const App = () => {

    return (
        <Fragment>
            <AppHeader />

            <main>
                <Container>
                    <Switch>
                        <Route path="/" exact component={ItemListPage}/>
                        <Route path="/create-item" component={NewItemPage}/>
                        <Route path="/cart" component={CartPage}/>
                    </Switch>

                    <Alerts/>
                </Container>
            </main>
        </Fragment>
    );
};

export default App;