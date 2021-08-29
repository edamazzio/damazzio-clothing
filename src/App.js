import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Homepage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
