import React, { Component } from 'react';
import styled from 'styled-components';
import BodyScrollFixed from "Components/Utils/BodyScrollFixed";



export const ModalContexts = React.createContext();

const _ = require('lodash');

const PseudofullScreen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top:0rem;
  left:0rem;
  right:0rem;
  bottom:0rem;
  width:100%;
  height:100%;
  background: transparent;
  padding: 0rem;
`;

 const FullScreen= styled.div`
  position: fixed;
 
  top:0rem;
  left:0rem;
  right:0rem;
  bottom:0rem;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  padding: 0rem;
 
  z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
`;

//Component Did mount shoud fetch products.
export default class ModalProviders extends React.Component
{
    constructor()
    {
      super()
      this.state = {
        modal: null ,
        fixScroll: false, 
        style: {},

      }
        
    }
  
  render()
  {  
      
      return (
        <ModalContexts.Provider 
          value={{
            closeModal:()=>{this.setState({modal:null, scroll:false, style:{}})},
            openModal:(modal, scroll = false, style = null )=>{
              this.setState({modal});

              if(scroll !== this.state.fixScroll)
                this.setState({fixScroll: scroll});

              if(style)
                  this.setState({style});

            }
          }}>       
          {this.props.children}

          {this.state.modal && 
            <>

           <FullScreen style={{...this.state.style}}>
        
        <PseudofullScreen onClick={()=>{this.setState({modal:null})}}/>


             {this.state.modal}
        </FullScreen>
        {this.state.fixScroll && <BodyScrollFixed/>}
         </>
}


        </ModalContexts.Provider>
      );
    }
}

export const withModal = (WrapperedComponent)=>
{
  return (props)=>(
            <ModalContexts.Consumer>      
             {(rest)=>(
                <WrapperedComponent {...rest} {...props}/>
              )}
            </ModalContexts.Consumer>
          )
  }