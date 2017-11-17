import React from 'react';
import {inject, observer} from 'mobx-react';


import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from "styled-components";

const LoggedIn = function LoggedIn(props) {


  return (
    <div>
      <StyledCard>
        <CardContent>

          {(!props.auth.currentUser) && (
            <Typography type="display2">
              Not currently logged in
            </Typography>
          )}

          {(props.auth.currentUser) && (<div>

            <Typography type="display2" gutterBottom>
              Successfully logged in
            </Typography>

            <Typography type="display1" component="h2" gutterBottom>
              Hey! {props.auth.currentUser.displayName}
            </Typography>

            <Typography type="headline" component="h2" gutterBottom>
              Here's what your login provider has returned about you:
            </Typography>


            <Typography type="body2" component="div">
              <pre> {JSON.stringify(props.auth.currentUser)} </pre>
            </Typography>

          </div>)}
        </CardContent>

        <CardActions>
          {/*<Button dense>Learn More</Button>*/}
        </CardActions>

      </StyledCard>



    </div>
  );
};


export default inject('auth')(observer(LoggedIn));


const StyledCard = styled(Card)`
    max-width: 600px;
    margin: 40px auto;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

`;
