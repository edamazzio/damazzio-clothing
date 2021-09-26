import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage'
import {Route, Switch} from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import {auth, createUserProfileDocument} from "./firebase/utils";
import { onAuthStateChanged, Unsubscribe } from "firebase/auth";
import { onSnapshot } from "firebase/firestore"
import { IUser } from "./interfaces/Users";
import {connect, ConnectedProps} from 'react-redux'
import {setCurrentUser} from "./redux/user/user-actions";

class App extends React.Component<PropsType, {}> {

  unsubscribeFromAuth: Unsubscribe

  componentDidMount(){

      const {setCurrentUser} = this.props

      this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
          if (userAuth){
            const userRef = await createUserProfileDocument(userAuth);
            if (userRef){
                onSnapshot(userRef, (snapshot) => {
                    setCurrentUser({
                        currentUser: {
                            id: snapshot.id.toString(),
                            ...snapshot.data()
                        } as IUser
                    });
                })
                return;
            }
          }
          setCurrentUser(userAuth);
      })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }


    render(){
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
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

const connector = connect(null, mapDispatchToProps);

type PropsType = ConnectedProps<typeof connector>

export default connector(App);
