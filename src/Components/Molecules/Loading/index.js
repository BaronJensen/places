import React, {useState, useContext} from 'react';
import styled from 'styled-components';
//import Navbar from "Components/Molecules/Navbar"
//import Footer from "Components/Molecules/Footer"
import {Container, Text} from 'local_npm/react-container';

const Loading = () => {
  return(
  <React.Fragment>

      <Container 
      	backgroundImg={`"${require("static/img/map.png")}"`}
      center
      height="100vh">

    <Container center circle="200px" defaultBorder  background="rgba(0,0,0,0.2)">
        <Text fontSize="30px" color="black" marginB="10"  marginT="30">🌍</Text>
        <Text fontSize="20px" color="black" weight="500" marginB="30">Loading...</Text>

        </Container>
        

      </Container>
  </React.Fragment>
  )
}
export default Loading;

