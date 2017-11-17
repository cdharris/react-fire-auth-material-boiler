
import React from 'react';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyDDw5z1TDt7q9TSPCmC0jvzt4nx1DVBpX0",
  authDomain: "boilerfire-materialreact.firebaseapp.com",
  projectId: "boilerfire-materialreact",
};

firebase.initializeApp(config);

// Configure FirebaseUI.
export const uiConfig = {
  // Popup signin flow rather than redirect flow (
  // Note that on mobile devices, redirect will be used regardless)
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],

  // Redirect to /LoggedIn after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  // signInSuccessUrl: '/LoggedIn',
  callbacks: {
      signInSuccess: () => {
        return false; // Avoid redirects after sign-in.
       }
     }
};

//TODO: this doesn't need to be a component, could just be access the observed variables vanilla
class AuthService extends React.Component {

  componentDidMount = () => {

    // Displays the login screen (so that the user sees its loading indicator) if the url has the has #login
    // (this happens when firebase redirects the browser back to to the app to complete the login flow)
    this.props.auth.checkLogin();


    firebase.auth().onAuthStateChanged((user) => {
      console.log("Auth state changed:", user);
      this.props.auth.setCurrentUser(user);
      if (user) {
        this.props.auth.loginHide();
      }
    });


  };

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default inject('auth')(observer(AuthService));
