import React, {useState, useContext} from 'react';
import {Container, Text} from 'local_npm/react-container';

//Local components
import History from "Components/Molecules/History"
import Search from "Components/Molecules/Search"
import IconArrowUp from "react-md-icon/dist/BaselineKeyboardArrowUp"
import IconArrowDown from "react-md-icon/dist/BaselineKeyboardArrowDown"
import PlaceInfo from "Components/Molecules/PlaceInfo"
import { usePlacesContext} from 'Components/Providers/Places'
  
/*
The structure of this component:

Sidebar 
 - Header 
 - Body 

*/

const Header =  (props)=>{

  return (
    <Container
        background="white"

        css={`
          z-index: 1;
          padding: 1rem;
          
             box-shadow: 0 0.4px 5px rgba(0,0,0,0.3);
          `}
        tabletCSS={`
          position:fixed;
          width: auto;
          right: 1rem;
          left: 1rem; 
          top: 1rem;
          transition: 0.2s;
          box-shadow: 0 0.4px 5px rgba(0,0,0,0.3);
          border-radius: 10px;
          `}>

          <Text fontSize="24px">🌍 Places</Text>
          <Search />

      </Container>)
}


const Body =  (props)=>{
  
  const [open, setOpen] = useState(false)
  const {current} = usePlacesContext()

  React.useEffect(()=>{
    if(current)
      setOpen(true)
    else
      setOpen(false)


  },[current])


  return (    
    <Container>
      <Container 
  
        background="#f5f5f5"
        corner="10px"

        css={`
          padding: 1rem;


        `}
        tabletCSS={`
          position:fixed;
          top: 85vh;
          width: auto;
          right: 0rem;
          left: 0rem;
          bottom: 0;
          transition: 0.2s;
          box-shadow: 0 0.4px 5px rgba(0,0,0,0.3);

          ${open && `

              top: 40vh;
              overflow-y: scroll;

            `}
     
          `}>
          <Container 
          onClick={()=>{setOpen(!open)}}

          center 
          tabletCSS="display:inline-block;"
          css={`
              display: none;
              font-size: 24px;
              margin-bottom: 1rem;
            

            `}>
         {!open? <IconArrowUp />:<IconArrowDown/>}
          </Container>
          
        {current?<PlaceInfo {...current} />:<History />}
  


      </Container>
  </Container>)
}


const Sidebar = () => {
  return(
  <React.Fragment>
 
    <Container  
      background="#f5f5f5"  
      position="fixed"  
      width="30%"
      overflowHidden
      corner="10px"
      shadow="0 0.4px 5px rgba(0,0,0,0.3)"
      css={`
          left: 1rem;
          bottom:1rem;
          top: 1rem;
          overflow: auto;
      `}
      tabletCSS={`
        position: relative;
        width: auto;
        overflow: scroll;
        background: transparent;
        box-shadow: none;
        border-radius: none;
     
        `}>


        <Header/>
        <Body />
 
    </Container>
  </React.Fragment>
  )
}
export default Sidebar;

