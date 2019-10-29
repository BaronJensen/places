import React, {useState, useContext} from "react"
import {Container} from "local_npm/react-container"
import styled from 'styled-components';

const NAVBARHEIGHT = "40px"

const _Section = styled.div`  
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    min-width: 0;
    height: 100%;
    flex: 1;
    z-index: 1;
`;

export const AlignStart = styled(_Section)`
    justify-content: flex-start;
    order: -1;
`;

export  const AlignEnd = styled(_Section)`
    justify-content: flex-end;
    order: 1;
`;


const Navbar = (props)=> {
	
	const {children, top="0"} = props

	return (<Container
				background="white"
				{...props}
				width = "100%"
				position= "absolute"
				distance ={ `${top} 0 auto 0`}
				row 
				css={"z-index:99999999;"}
				height={NAVBARHEIGHT}>
				{children}
			</Container>)
}

export default Navbar;