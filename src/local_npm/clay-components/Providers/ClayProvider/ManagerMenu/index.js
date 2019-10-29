import React, {useState, useContext} from "react"
import Typography  from "local_npm/react-styled-typography"
import {Container, Img} from "local_npm/react-container"
import {ClayContext} from "../";



import BaselineCheckBox from "react-md-icon/dist/BaselineCheckBox";
import BaselineCheckBoxOutlineBlank from "react-md-icon/dist/BaselineCheckBoxOutlineBlank";
import BaselineFilterNone from "react-md-icon/dist/BaselineFilterNone";
import BaselineArrowDropDown from "react-md-icon/dist/BaselineArrowDropDown";
import BaselineClose from "react-md-icon/dist/BaselineClose";
import BaselineArchive from "react-md-icon/dist/BaselineArchive";

const NAVBARHEIGHT = "40px"

/*
	linkProps={{
	props:["height"],
	id:"item.component.root.other.navbar",
	variant:"default",
	}}
*/

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

	var sizes = ["100%", "70%", "10%"]


	return (<Container
				width={sizes[0]}
				{...props}
				row

				marginCenter
				css={`
						
						padding:1rem 0;
					`}
				><Container
				width={sizes[2]}
				marginCenter
				css={`
				

					`}
				
				height={NAVBARHEIGHT}>
				{props.active?<BaselineCheckBox style={{fontSize:"24px"}}/>:<BaselineCheckBoxOutlineBlank style={{fontSize:"24px"}}/> }
			</Container>

				<Container
				width={sizes[1]}
				marginCenter

				
				height={NAVBARHEIGHT}>
				<Typography 
				css=" text-transform: capitalize;"
				color="black" 
				fontSize="16px"
				marginB="2"
				>{props.title}</Typography> 
			</Container>

			<Container
				width={sizes[2]}
				marginCenter
				css={`
					

					`}
				
				height={NAVBARHEIGHT}>
				<BaselineArchive style={{fontSize:"24px"}}/> 
			</Container>
<Container
				width={sizes[2]}
				marginCenter

				
				height={NAVBARHEIGHT}>
				<BaselineFilterNone style={{fontSize:"24px"}}/>
			</Container>
			
			</Container>)
}

const Navbar = (props)=>{
	const {children, top="0"} = props

	return (<Container
				background="white"
				{...props}
				
					width = "100%"
					position= "absolute"
					distance ={ `${top} 0 auto 0`}
				row 
				css={"z-index:99999999;"}
				height={NAVBARHEIGHT}
				>{children}
			</Container>)
}


export const PropsEditor = (props)=>{

	const {slots, setProps, setSlot} = useContext(ClayContext);

	const [editor, setEditor] = useState(false)

	return (
		<React.Fragment>
		<Container
				onClick={()=>{if(editor)setEditor(false)}}
				shadow="0 0.5px 5px rgba(0,0,0,0.4)"
				overflowHidden
				defaultCorner
				background="#f6f6f6"
				position="fixed" 
				distance="auto -620px 60px auto"
				width="650px"
				height="500px"
				
				css={`
					&:hover{
						right: 60px;
					}
					color: black;
					transition: 0.8s;
					${editor && " bottom:-350px;  "}
					border-radius:6px;
					z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
				`}>

				<Navbar  background="#f6f6f6">
				<Item width="auto" margin="0 2rem">
				<div style={{"fontSize":"20px"}}>react-master-component </div>
				</Item>

			
				<Item 
					onClick={props.close}
					center
					width="40px">
					<BaselineClose style={{fontSize:"25px"}}/>
				
				</Item>
		
				</Navbar>			

			<Container
				width="110%"
				background="#f6f6f6"
				overflowYScroll
				height="90%"
				css={`
					margin-top:40px; 
					padding:1rem; 
					padding-right:10%;
					font-size: 12px;

				`}>

				

			<Container 
				width="90%" 
				marginCenter>

					

			</Container>

			<Container 
				width="80%" 
				 
				  
				margin="3rem auto"
				
				>
				<h1>Styles</h1>

				Beautiful React, Vue and Angular templates and others things what you need to build a better web based in the new Google Material Design.
				
			<Container row margin="1rem 0">

				<ListItem 
					title="Default" 
					active={slots.container === "default"} 
					onClick={()=>{setSlot("container","default")}} />

				<ListItem 
					title="Custom" 
					active={slots.container === "custom"} 
					onClick={()=>{setSlot("container","custom")}} />
						

				</Container>
				<h1>Dictionaty</h1>

				Beautiful React, Vue and Angular templates and others things what you need to build a better web based in the new Google Material Design.
				

			<Container row margin="1rem 0">
			<ListItem title="default"   active/>
				<ListItem title="custom"   />
			

				</Container>
			
			</Container>
	
			</Container>

		</Container>

		</React.Fragment>


		)
}



export default PropsEditor;


