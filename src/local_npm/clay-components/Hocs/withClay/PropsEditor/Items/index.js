import React, {useState, useContext} from "react";
import Typography  from "local_npm/react-styled-typography";
import {Container, Img} from "local_npm/react-container";
import styled from 'styled-components';

const NAVBARHEIGHT = "40px"


const Item = (props)=>{
	return (<Container
				width="20%"
				{...props}
				center
				height={NAVBARHEIGHT}>
				{props.children}
			</Container>)
}


const ListItem = (props)=>{

	
	var sizes = ["30%", "80%", "90%"]
	if(props.layoutProps.size === "big")
		sizes = ["100%", "90%", "90%"]
	if(props.layoutProps.size === "medium")
		sizes = ["45%", "90%", "90%"]

	return (<Container
				width={sizes[0]}
				{...props}
				row
				margin="1rem auto">

				<Container
				width={sizes[1]}
				marginCenter
				height={NAVBARHEIGHT}>
				<Typography 
				css=" text-transform: capitalize;"
				color="#a09da0" 
				fontSize="12px"
				marginB="2"
				>{props.title}</Typography> 
			</Container>

			<Container
				width={sizes[2]}
				marginCenter
				height={NAVBARHEIGHT}>
				<input 
				onChange={(e)=>{props.update(props.title, e.target.value)}}
				style={{
					fontSize:"11px",
					color:props.color?props.value: "#787779",
					width:"100%",
					background: "#1e1b1e",
					padding:"0.6rem 0.2rem",
					border:props.color?`1px solid ${props.value}`:"none",
					borderRadius:"2px",
					boxShadow:"0 -0.3px 5px rgba(0,0,0,0.3)"
				}}
				value={props.value}/>
				
			</Container>
			</Container>)
}


const ShortcutItem = (props)=>{

	var sizes = [(100/5 - 1) +"%" ];

	return (<Container
				{...props}
				width={sizes[0]}
				row
				margin="0.25rem auto">
	
			<Container
				defaultCorner
				defaultBorder
				defaultShadow
				marginCenter
				css={`
					&:hover{
						background: gray; 
						color:black;
					}
					${props.active && "border-color:gray;  color: gray;"}
					 
					`}
				center
				height={NAVBARHEIGHT}>
				{props.icon && <props.icon style={{fontSize:"16px"}}/>}
			</Container>
		</Container>)
}

const EditorItems = (props)=>{

	
	return (
		<React.Fragment>
		
				<Container 
				width="90%" 
				marginCenter>

				<textarea
				value={props.componentStyle[props.title]} 
				onChange={(e)=>{props.update(props.title,e.target.value)}}
				placeholder="Nothing here..."
				style={{
					margin:"0 auto",
					fontSize:"14px",
					minHeight: "100px",
					border:"none",
					padding:"1rem",
					margin:"2rem 0",
					background: "#1d1e22", 
					color:"white", 
					width:"100%", 
					height:"200px",
					borderRadius:"2px",
					boxShadow:"0 0.5px 3px rgba(0,0,0,0.6)"
				}} 
				/>	
				</Container>
			</React.Fragment>)
}

export {
Item,
ListItem,
ShortcutItem,
EditorItems
} 