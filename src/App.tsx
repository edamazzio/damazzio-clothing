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


class App extends React.Component<{},{currentUser: IUser|null}> {
  constructor(props) {
    super(props);
      this.state = {
          currentUser: null
      }
  }

  unsubscribeFromAuth: Unsubscribe

  componentDidMount(){
      this.unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
          if (userAuth){
            const userRef = await createUserProfileDocument(userAuth);
            if (userRef){
                onSnapshot(userRef, (snapshot) => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id.toString(),
                            ...snapshot.data()
                        } as IUser
                    });
                })
                return;
            }
          }
          this.setState({currentUser: null})
      })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }


    render(){
    return (
        <div>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInSignUp}/>
          </Switch>
        </div>
    );
  }
}

export default App;
