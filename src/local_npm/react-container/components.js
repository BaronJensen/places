import React from 'react';
import styled, { css } from 'styled-components';
import media from './media'
import {center, row, fullscreen} from "./utils"

export const StyledInput = styled.input`
  width: ${props => !props.width?"100%":props.width};
  ${props => props.height && `height:${props.height};`}
  ${props => props.marginCenter && "margin: 0 auto;"}
  margin: ${props => !props.margin?"0":props.margin};
  position: ${props => !props.position?"relative":props.position};
  ${props => (props.distance) && `
  top:${props.distance.split(" ")[0]}; 
  bottom:${props.distance.split(" ")[2]};
  left:${props.distance.split(" ")[3]};
  right:${props.distance.split(" ")[1]};

  `};

  ${props => props.background && `background: ${props.background};`}
	${props => props.color && `color: ${props.color};`}
  
  ${props => props.circle &&`
  		height:${props.circle};
  		width:${props.circle};
  		border-radius: 50%;
  		overflow: hidden;
  		text-align: cente;
  		padding: 0;
  		${center}
  	`}

  	${props => props.backgroundImg &&`
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-image: url(${props.backgroundImg} );

  	`}


  ${props => props.overflowHidden && `overflow:hidden;`}
  ${props => props.overflowXScroll && `overflow-x:scroll;`}
  ${props => props.overflowYScroll && `overflow-y:scroll;`}


  ${props => props.defaultCorner && `border-radius: 5px;`}
  ${props => props.corner && `border-radius: ${props.corner};`}

  ${props => props.defaultBorder && `border: 1px solid rgba(0,0,0,0.2);`}
	${props => props.border && `border: ${props.border};`}


  ${props => props.defaultShadow && `box-shadow: 0 0.5px 3px rgba(0,0,0,0.2);`}
	${props => props.shadow && `box-shadow: ${props.shadow};`}

	${props => props.center && ` ${center}`}
  ${props => props.row && ` ${row}`}
  ${props => props.fullscreen && ` ${fullscreen}`}


	${props => props.css && `${props.css}`}
	${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
	${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
	${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
	${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}

`;

export const ImgSource = styled.img`
  	width: ${props => !props.width?"100%":props.width};
   ${props => props.height && `height:${props.height};`}
  	${props => props.marginCenter && "margin: 0 auto;"}
    margin: ${props => !props.margin?"0":props.margin};
  	position: ${props => !props.position?"relative":props.position};
  	${props => (props.distance) && `
  		top:${props.distance.split(" ")[0]}; 
  		bottom:${props.distance.split(" ")[2]};
  		left:${props.distance.split(" ")[3]};
  		right:${props.distance.split(" ")[1]};
`};

  ${props => props.background && `background: ${props.background};`}
	${props => props.color && `color: ${props.color};`}
	
  ${props => props.circle &&`
  		height:${props.circle};
  		width:${props.circle};
  		border-radius: 50%;
  		overflow: hidden;
  		text-align: cente;
  		padding: 0;
  		${center}
  	`}

  	${props => props.backgroundImg &&`
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		background-image: url(${props.backgroundImg} );
  `}


  ${props => props.overflowHidden && `overflow:hidden;`}
  ${props => props.overflowXScroll && `overflow-x:scroll;`}
  ${props => props.overflowYScroll && `overflow-y:scroll;`}

  ${props => props.defaultCorner && `border-radius: 5px;`}
  ${props => props.corner && `border-radius: ${props.corner};`}

  ${props => props.defaultBorder && `border: 1px solid rgba(0,0,0,0.2);`}
	${props => props.border && `border: ${props.border};`}

  ${props => props.defaultShadow && `box-shadow: 0 0.5px 3px rgba(0,0,0,0.2);`}
	${props => props.shadow && `box-shadow: ${props.shadow};`}

	${props => props.center && ` ${center}`}
  ${props => props.row && ` ${row}`}
  ${props => props.fullscreen && ` ${fullscreen}`}

	${props => props.css && `${props.css}`}
	${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
	${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
	${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
	${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}

`;


const StyledInput1 = 

export const Container = (props)=>{
	const { children, wrapper } = props;

	const styles = wrapper?wrapper:props

	return(
		<StyledContainer {...styles}>
			{wrapper?<StyledContainer {...props}>{children}</StyledContainer>:children}
		</StyledContainer>
	)
}

export const Input = (props)=>{
	const { wrapper  } = props;
	const styles = wrapper?wrapper:{...props, onChange:(e)=>{}}
	return(
		<Container {...styles}>
				<StyledInput {...props} />
		</Container>
	)
}



