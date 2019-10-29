import React, {useState} from 'react';

import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { Marker } from '@react-google-maps/api';
import {Container, Text} from 'local_npm/react-container';
import {MAPS_THEME_RETRO,MAPS_THEME_NIGHT } from "Components/Constants/maps_themes"

import IconTheme from "react-md-icon/dist/BaselineBrightnessMedium";

import Loading from 'Components/Molecules/Loading';
import _ from "lodash"

import { usePlacesContext} from 'Components/Providers/Places'

 const YOUR_API_KEY =  process.env.REACT_APP_GOOGLE_MAP_API_KEY

const MapBox = (props) => {
const [loading, setLoading]= useState(true)
const [darkTheme, setDarkTheme] = useState(false)
const {current, places, showAllHistory } = usePlacesContext()

const map = {}

  return(
  <React.Fragment>
      <Container height="100vh">

         <LoadScript
           onError={()=>{

             
                alert("Error")



            }}

            loadingElement={<Loading/>}
          id="script-loader"
        libraries={["places"]}
          googleMapsApiKey={YOUR_API_KEY} >


          <GoogleMap

            disableDefaultUI= {true}
            onLoad={(map)=>{

              if(map)
                setLoading(false)
              else
                alert("Error masivo")



            }}
          
            id='places-map'
            options={{ 
              styles: darkTheme?MAPS_THEME_NIGHT: MAPS_THEME_RETRO,
              streetViewControl: false,
              gestureHandling : 'greedy',
              scaleControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
              mapTypeControlOptions: {
                mapTypeIds: [
                   

                ]
              },
             }}
            mapContainerStyle={{height: "100vh", width: "100%", overflow:"hidden", color:"white"}}
            zoom={showAllHistory?2:12}
            center={current?_.get(current,"geometry.location") :{
              lat:37.772,
                lng: -122.214
            }}>

            {current && <Marker position={_.get(current,"geometry.location") }
                        />}

           {(showAllHistory && places) && _.map(places,(item, key)=>{
           
            if(item !== current)
            return<Marker
            key={item.id}
            icon="" 
              label={"✈️"}
             
                position={_.get(item,"geometry.location")}
                               />})}


    
          </GoogleMap>
        </LoadScript>

       
      </Container>

      <Container 
        onClick={()=>{setDarkTheme(!darkTheme)}}
        defaultShadow 
        circle="60px"  
        center 
        background={!darkTheme?"#5189ce":"#c8efe2"}
        tabletCSS={`
           top: 70vh;
           
        `}
        css={`
          color:${!darkTheme?"white":"gray"}
          position: fixed;
          right: 1rem;
          top: 1rem;
          font-size: 30px;
          `}>
          
      <IconTheme />
    </Container>

     
  </React.Fragment>
  )
}
export default MapBox;


