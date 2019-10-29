import React from 'react';

import {Container, Text} from 'local_npm/react-container';


import IconHistory from "react-md-icon/dist/BaselineHistory";
import IconDelete from "react-md-icon/dist/BaselineDelete";
import { usePlacesContext} from 'Components/Providers/Places';


const HistoryItem = (props) => {  

  const {icon = "",name = "", id, formatted_address} = props
  const {removePlace, selectPlace} = usePlacesContext()

  return(
  <React.Fragment>

    <Container background="white" 
        css={`
        cursor: pointer;
        &:hover{
          background: rgba(0,0,0,0.1);
        }

       `}>
      <Container row css="padding: 1rem 0;" >
      <Container width="15%" center >
        <IconHistory  style={{color:"gray", fontSize:"20px"}}/>
      </Container>

       <Container width="70%" center onClick={()=>{selectPlace(props)}}>
       <Container>
       <Text fontSize="18px" weight="400" marginB="4">
        {name}
        </Text>
        </Container>

         <Container>
       <Text fontSize="14px" weight="400" color="gray" marginB="4">
        {formatted_address}
        </Text>
        </Container>

      { /*  <Container>
             <Text fontSize="12px" weight="400" color="rgba(0,0,0,0.4)">
              1 min ago
              </Text>
              </Container>
      */}
      </Container>

      <Container width="15%" center  >
      <Container 
        as="button"
        onClick={()=>{removePlace(id)}} 
        circle="30px" 
        css={`

          color: gray;
          &:hover{
            background: rgba(0,0,0,0.2);
            color: white;

          }

        `}>
        <IconDelete  style={{ fontSize:"16px"}}/>
         </Container>
      </Container>
      </Container>
     </Container>

        
  </React.Fragment>
  )
}
export default HistoryItem;

