import React from 'react';
import {inject, observer} from 'mobx-react';
import firebase from 'firebase';

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import {FirebaseAuth} from "react-firebaseui";
import {uiConfig} from "./Auth/AuthService";

class LoginModal extends React.Component {

  render() {

    return (
      <div>

        <Dialog keepMounted={false} open={this.props.auth.shouldShowLogin} onRequestClose={this.props.auth.loginHide}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <DialogContentText>Login to the sample app below, only google will work in this hosted demo. Facebook will
              work as soon as you clone this project and give it a facebook login api key.</DialogContentText>

            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
          </DialogContent>

          <DialogActions>
            <Button color="primary" onClick={this.props.auth.loginHide}>
              Close
            </Button>
          </DialogActions>

        </Dialog>

      </div>
    );
  }
}

export default inject('auth')(observer(LoginModal));
