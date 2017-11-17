import React from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';

import Avatar from 'material-ui/Avatar';
import Menu, {MenuItem} from 'material-ui/Menu';
import Button from 'material-ui/Button';

const LoginAvatar = class LoginAvatar extends React.Component {

  state = {
    anchorEl: undefined,
    open: false,
  };

  handleClick = event => {
    this.setState({open: true, anchorEl: event.currentTarget});
  };

  handleRequestClose = () => {
    this.setState({open: false});
  };

  handleRequestLogout = () => {
    this.props.auth.logout();
    this.handleRequestClose();
  };


  renderUserAvatar = () => (<div>

    <StyledAvatar onClick={this.handleClick}>
      {this.props.auth.currentUser.displayName.split(' ').map((word) => word[0]).join('')}
    </StyledAvatar>

    <Menu anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose} >
      <MenuItem style={{fontSize: 14}} onClick={this.handleRequestLogout}>Logout</MenuItem>
    </Menu>

  </div>);

  render() {

    return (
      <StyledLoginContainer {...this.props}>

        {(this.props.auth.currentUser) && (this.renderUserAvatar() )}

        {(!this.props.auth.currentUser) && (
          <Button onClick={() => this.props.auth.loginShow()}> Sign In </Button>
        )}

      </StyledLoginContainer>
    );
  }
};

const StyledAvatar = styled(Avatar)`
    cursor: pointer;
    margin: 10px;
    color: #fff;
    background-color: #54a9e4;
  ;
`;

const StyledLoginContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export default inject('auth')(observer(LoginAvatar));
