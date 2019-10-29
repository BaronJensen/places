import React, { useState, useContext } from 'react';

export const PlacesContext = React.createContext();

export const usePlacesContext = () => useContext(PlacesContext);

const PlacesProviders = ({children})=>{  

    const [current, setCurrent] = useState(null) 
    const [showAllHistory, setAllHistory] = useState(false) 
    const [places, setPlaces] = useState([]) 

    const addPlace = (place)=>{

      if(showAllHistory)
        setAllHistory(false)
      //Remove this place is was already searched!
      const newPlaces = places.filter((item)=>place.id !== item.id);
      setPlaces([...newPlaces, place])
    } //Requeriment
    const removePlace = (id)=>{
      const newPlaces = places.filter((item)=>id !== item.id);
      setPlaces([...newPlaces]);


    } //Requeriment
    const cleanHistory = (id)=>{setPlaces([])}//Requeriment
    const showAllHistoryOn = ()=>{setAllHistory(true)}//Extra
    const selectPlace = (place)=>{
      if(showAllHistory)
        setAllHistory(false)
    setCurrent(place)} //Requeriment
    const unselectPlace = ()=>{
           if(showAllHistory)
           setAllHistory(false)

      setCurrent(null)}
      return (
        <PlacesContext.Provider 
          value={{
              selectPlace,
              unselectPlace,
              addPlace,
              removePlace,
              cleanHistory,
              current,
              places,
              showAllHistoryOn,
              showAllHistory
          }}> 
          {children}
        </PlacesContext.Provider>
      );
    }
export default PlacesProviders

