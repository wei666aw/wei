import React, { Component} from 'react';
import { HashRouter, Route, Link,Switch,Redirect } from 'react-router-dom'
import Lys from './demo/Layout'
import Login from './demo/Login'
import User from './demo/User'
import Goods from './demo/Goods'

class App extends Component {
    render() {
        return (
            <HashRouter >
                <Route path='/login' component={Login}></Route>
                <Route Redirect="/" to="/Layout" render={() => {
                    return (
                        <Lys>
                            <Route path='/Lys/user' component={User}></Route>
                            <Route path='/Lys/goods' component={Goods}></Route>
                        </Lys>
                    )
                }}></Route>
            </HashRouter>
        );

    }
}

export default App;