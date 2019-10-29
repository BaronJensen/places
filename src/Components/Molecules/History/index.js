import React, {useState} from 'react';
import styled from 'styled-components';
import _ from "lodash"
//import Navbar from "Components/Molecules/Navbar"
//import Footer from "Components/Molecules/Footer"
import {Container, Text} from 'local_npm/react-container';
import OptionItem from "./OptionItem"
import Item from "./Item"

import IconHistory from "react-md-icon/dist/BaselineHistory";
import IconDelete from "react-md-icon/dist/BaselineDelete";

import { usePlacesContext} from 'Components/Providers/Places'

const History = () => {


  const {places,cleanHistory, showAllHistory ,showAllHistoryOn} = usePlacesContext()



  if(places.length === 0 )
    return (
      <Container height="300px" center>
        <img src={require("static/img/empy.svg")} style={{width:"50%"}}/>
        <Text fontSize="22px" marginT="20" weight="500" css={` opacity: 0.2;
          `}>
          You haven't searched anything!
          </Text>
      </Container>)


  return(
  <React.Fragment>
      <Container >
      
       {!showAllHistory && places.length > 1 &&  <OptionItem
                onClick={showAllHistoryOn} 
                 title="Remeber the past."
                 subtitle="All the places you searched in the past"
                 icon={<IconHistory />}/>
       }
        <Container 
          defaultShadow 
          defaultCorner 
          overflowHidden 
          background="white">
          
          {_.map(places, (place ,key)=><Item {...place} key={key} />)}

        </Container>

        <Container 
          onClick={()=>{cleanHistory()}}
          center 
          margin="2rem auto" 
          css="color: rgba(0,0,0,0.4); cursor: pointer;">

        <IconDelete />
     
      Clear history 

        </Container>
      </Container>    
  </React.Fragment>
  )
}
export default History;

