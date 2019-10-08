import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductPage from './ProductDisplay';
import NotFound from './notFound';
import Timer from './Timer';
const routes = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ProductPage}/>
            <Route path='/timer' component={Timer}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    </main>
)

export default routes