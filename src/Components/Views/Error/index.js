import React from 'react';
import {Container, Text} from 'local_npm/react-container';

const ErrorView = ({type ="404", text ="Page not found  😱"}) => {
  return(
  <React.Fragment>

      <Container 
      
      center
      height="100vh">


        <Text fontSize="50px" color="black" marginB="10"  marginT="30">Error {type}</Text>
        <Text fontSize="16px" color="gray" weight="300" marginB="30">{text}</Text>
        

        

      </Container>
  </React.Fragment>
  )
}
export default ErrorView;

