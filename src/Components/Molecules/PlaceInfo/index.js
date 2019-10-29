import React from 'react';

import {Container, Text} from 'local_npm/react-container';

import IconClose from "react-md-icon/dist/BaselineClose";
import { usePlacesContext} from 'Components/Providers/Places';
import _ from "lodash"

const PlaceInfo = (props) => {  

  const {icon = "",name = "", id, formatted_address, photos} = props

  console.log(props)
  const {unselectPlace} = usePlacesContext()

  return(
  <React.Fragment>

    <Container 
      defaultShadow
      background="white" 
      defaultCorner
        css={`
        min-height: 300px;
        padding: 1rem;
       

       `}>
      <Container  css="margin-top: 20px;" >
   

      
       <Container>
       <Text fontSize="22px" weight="500" marginB="4">
        {name}
        </Text>
        </Container>

         <Container>
       <Text fontSize="14px" weight="400" color="gray" marginB="4">
        {formatted_address}
        </Text>
        </Container>


        {photos &&

            <Container
              margin="1.2rem auto" 
              row 
              defaultBorder 
              defaultCorner 
              overflowHidden >

                { photos.slice(0,3).map((data, key)=><img src={data.getUrl()} style={{marginBottom:"0.5rem", width:key === 0? "100%":"49%", }}   />)}
         
            </Container>
        }

   
      </Container>

        <Container onClick={unselectPlace} 
        css={`
            position: absolute; 
            top: 1rem;
            right: 1rem;
            font-size: 20px;
            cursor: pointer;
            &:hover{
              color: white;
              background: rgba(0,0,0,0.2);
            }


          `} 
          center
          defaultBorder
          circle="30px" >
   <IconClose />
        </Container>

      

     </Container>

        
  </React.Fragment>
  )
}
export default PlaceInfo;

