import React from 'react';

import Card, {CardActions, CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styled from "styled-components";
import LoggedIn from "./LoggedIn";

const PageOne = function PageOne(props) {


  return (
    <div>
      <StyledCard>
        <CardContent>

            <Typography type="display1" gutterBottom>
              Checkout this little Firebase Auth / React / Material-UI boilerplate
            </Typography>
            <Typography type="caption" gutterBottom>
              Also simple usage of react-router and mobx
            </Typography>




        </CardContent>

        <CardActions>
            <Typography type="headline" component="h2" gutterBottom>
            </Typography>
        </CardActions>

      </StyledCard>

         <LoggedIn/>

    </div>
  );
};


export default PageOne;


const StyledCard = styled(Card)`
    max-width: 600px;
    margin: 40px auto;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

`;
