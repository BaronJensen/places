import React from 'react';

import {Container, Text} from 'local_npm/react-container';


import IconArrow from "react-md-icon/dist/BaselineArrowForward";



const OptionItem = ({icon = "", title = "Add a new option", subtitle="The description of this option", onClick=()=>null}) => {
  return(
  <React.Fragment>
    <Container 
      onClick={onClick}
      row 
      background="white"
      margin="1rem 0"
      defaultBorder

      defaultCorner
        css={`
       
        cursor: pointer;
        &:hover{
          background: rgba(0,0,0,0.1);
        }

       `}>
      <Container width="15%" center height="60px">
        <Container 
          circle="20px" 
          background="gray" 
          center
          css={`
            font-size: 12px;
            color: white;
            `}
          >
            {icon}
        </Container>
      </Container>

       <Container width="70%" center>
       <Container>
       <Text fontSize="16px" weight="400">
       {title}
        </Text>
        </Container>

         <Container>
       <Text fontSize="12px" weight="400" color="gray">
       {subtitle}
        </Text>
        </Container>





      </Container>


      <Container width="15%" center>
        <IconArrow />
      </Container>



        

      </Container>

     

        
  </React.Fragment>
  )
}
export default OptionItem;

