import React, {useState} from 'react';


import {Container, Text} from 'local_npm/react-container';

import IconSearch from "react-md-icon/dist/BaselineSearch";
import IconClose from "react-md-icon/dist/BaselineClose";
import IconMenu from "react-md-icon/dist/BaselineMenu";

import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { Autocomplete } from '@react-google-maps/api'
import { usePlacesContext} from 'Components/Providers/Places'
import _ from "lodash"

 const YOUR_API_KEY =  process.env.REACT_APP_GOOGLE_MAP_API_KEY

const Search = () => {
 const {selectPlace, addPlace} = usePlacesContext()
 var searchBox = {}
 const [search, setSearch] = useState("")

const handlePlacesChanged = (place)=>{
    addPlace(place)
    selectPlace(place)
}

  return(
  <React.Fragment>

   <LoadScript
    id="script-loader"
    libraries={["places"]}
    callback={["initAutocomplete"]}
    googleMapsApiKey={YOUR_API_KEY} >

      <Container 
        row 
        background="white"
        overflowHidden
       
        margin="1rem 0">
      
        <Container 
          width="85%" 
          center   
          css={`
            &>div{
              width:100%;
            }
            input{
               &:focus {
                  outline: none !important;
                  border-bottom: 1px solid rgba(0,0,0,0.3);
               }
              border: none;
              font-size: 14px;
              height: 40px;
              width:100%;
              padding-left: 2rem;
              border-bottom: 1px solid rgba(0,0,0,0.1);
          }
         `}>

          {search?<input
                  type="text"
                  value={search}
                  disabled
                />
              :<Autocomplete
                  onLoad={ref => searchBox = ref}
                  onPlaceChanged={
                    () => {
          
                      // console.log(searchBox)
        
                      if(searchBox.getPlace)
                     { 


                      if(searchBox.getPlace().id)

                       { setSearch(searchBox.getPlace().name)
                                           //console.log(searchBox.getPlace())
                                           handlePlacesChanged(searchBox.getPlace())
                                      }
                                    else
                                      alert("Error 404 place not found in the world.")
          
                     }
                     else{
                      alert("There is an error with Google Maps")
                     }
                    }
                }>
          
                <input
                  type="text"
                 placeholder="Try Mutuo, La Minerva, Chapu..."
                  
                />
              </Autocomplete>}

       
          </Container>

          <Container 
            width="15%" 
            center>
            {search?  <IconClose onClick={()=>{setSearch("")}} style={{fontSize:"24px"}} />  :<IconSearch style={{fontSize:"24px"}} />}
          </Container>

        </Container>   
      </LoadScript>

  </React.Fragment>
  )
}
export default Search;

