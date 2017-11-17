import React, {Component} from 'react';
import styled from 'styled-components';

import AppBar from "./AppBar";
import LoginModal from "./LoginModal";

class AppShell extends Component {

  render() {
    return (
      <StyledAppContainer>
        <AppBar/>
        <LoginModal/>
      </StyledAppContainer>
    );
  }
}

export default AppShell;


const StyledAppContainer = styled.div`
  background-color: #fafafa;
`;