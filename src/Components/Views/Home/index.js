import React from 'react';
import {Container} from 'local_npm/react-container';
import { GoogleMap, LoadScript } from '@react-google-maps/api'
//Local components
import MapBox from "Components/Molecules/MapBox"
import PlacesProvider from "Components/Providers/Places"
import Sidebar from "Components/Molecules/Sidebar"
const HomeView = () => {
  return(
  <React.Fragment>
	<PlacesProvider>
      <Container 
         
          height="100vh"> 
          <MapBox />
           <Sidebar/>
      </Container>
   	</PlacesProvider>
  </React.Fragment>
  )
}
export default HomeView;