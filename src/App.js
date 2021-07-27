import React from "react";
import { GlobalStyle } from "./global-styles";

import { Switch, Route, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Homepage from "./pages/homepage/homepage-component";
import ShopPage from "./pages/shop/shop-component";
import Header from "./components/header/header-component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up-component";
import CheckoutPage from "./pages/checkout/checkout-component";

import { auth, createUserProfileDocument } from "./Firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
           <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/checkout"
            render={(routeProps) => <CheckoutPage {...routeProps} />}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
