import React from 'react'
import { Switch, Route } from 'react-router-dom'

import User from './App'
import Product from './components/Product'

function Routes() {
    return (
        <Switch>
            <Route path="/" component={User} exact />
            <Route path="/products" component={Product} />
            <Route component={() => <h2>Page 404! Not found.</h2>} />
        </Switch>
    )
}

export default Routes