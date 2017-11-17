import * as mobx from 'mobx'
import {Provider} from "mobx-react";
import React from 'react';
import AuthService from "./AuthService";
import firebase from 'firebase';

const auth = mobx.observable({

  currentUser: false,
  shouldShowLogin: false,

  loginShow: mobx.action.bound(function () {
    this.shouldShowLogin = true;
    window.location.hash = '#login'
  }),

  loginHide: mobx.action.bound(function () {
    this.shouldShowLogin = false;
    window.location.hash = ''
  }),

  checkLogin: mobx.action.bound(function () {
    this.shouldShowLogin = (window.location.hash.includes('#login'));
  }),

  setCurrentUser: mobx.action.bound(function (currentUser) {
    this.currentUser = currentUser;
  }),

  logout: mobx.action.bound(function () {
    firebase.auth().signOut();
  }),

});


export const AuthProvider = class AuthProvider extends React.Component {
  render() {
    return (
      <Provider auth={auth}>
        <div>
          <AuthService/>
          {this.props.children}
        </div>
      </Provider>
    );
  }
};