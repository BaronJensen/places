import React, {useState, useContext} from "react"
import Typography  from "local_npm/react-styled-typography"
import {Container, Img} from "local_npm/react-container"
import Navbar, {AlignStart, AlignEnd} from './Navbar';
import {Item, ListItem, ShortcutItem, EditorItems } from './Items';
/*
import BaselineArrowDropDown from "react-md-icon/dist/BaselineArrowDropDown";
import BaselineClose from "react-md-icon/dist/BaselineClose";
import BaselineMinimize from "react-md-icon/dist/BaselineMinimize";*/

import {ClayContext} from "../../../Providers/ClayProvider";

import {CopyToClipboard} from 'react-copy-to-clipboard';


import BaselinePhoneAndroid from "react-md-icon/dist/BaselinePhoneAndroid";
import BaselineTabletMac from "react-md-icon/dist/BaselineTabletMac";
import BaselineComputer from "react-md-icon/dist/BaselineComputer";
import BaselineStyle from "react-md-icon/dist/BaselineStyle";
import BaselineArrowDropDown from "react-md-icon/dist/BaselineArrowDropDown";
import BaselineClose from "react-md-icon/dist/BaselineClose";
import BaselineMinimize from "react-md-icon/dist/BaselineMinimize";
import BaselineBorderStyle from "react-md-icon/dist/BaselineBorderStyle";
import BaselineRoundedCorner from "react-md-icon/dist/BaselineRoundedCorner";
import BaselineLayers from "react-md-icon/dist/BaselineLayers";
import BaselineCenterFocusStrong from "react-md-icon/dist/BaselineCenterFocusStrong";
import BaselineKeyboardTab from "react-md-icon/dist/BaselineKeyboardTab";
import BaselineFullscreen from "react-md-icon/dist/BaselineFullscreen";
import BaselineFormatAlignCenter from "react-md-icon/dist/BaselineFormatAlignCenter";
import BaselineBorderClear from "react-md-icon/dist/BaselineBorderClear";
import BaselineBorderRight from "react-md-icon/dist/BaselineBorderRight";
import BaselineBorderBottom from "react-md-icon/dist/BaselineBorderBottom";

const configJSON = {
	textarea:[
	{
		title: "css",
		icon:BaselineStyle
	},
	{
		title: "desktopCSS",
		icon:BaselineTabletMac
	},
	{
		title: "tabletCSS",
		icon:BaselinePhoneAndroid
	},
	{
		title: "phoneCSS",
		icon:BaselineComputer
	}],
	toggles:[
		{title:"defaultCorner", icon:BaselineBorderStyle},
		{title:"defaultBorder", icon:BaselineRoundedCorner},
		{title:"defaultShadow", icon:BaselineLayers},
		{title:"center", icon:BaselineCenterFocusStrong},
		{title:"row", icon:BaselineKeyboardTab},
		{title:"fullscreen", icon:BaselineFullscreen},
		{title:"marginCenter", icon:BaselineFormatAlignCenter},
		{title:"overflowHidden", icon:BaselineBorderClear},
		{title:"overflowYScroll", icon:BaselineBorderRight},
		{title:"overflowXScroll", icon:BaselineBorderBottom},
	],
	inputs:[
		{
			size: "small",
			title: "width",

		},
		{
			size: "small",
			title: "height",
		},
		{
			size: "small",
			title: "margin",
		},
		{
		
			size: "medium",
			title: "position",
		},
		{
			size: "medium",
			
			title: "distance",
		},
		{
			size: "small",
		
			type:"color",
			title: "color",
		},
		{
			size: "small",	
			title: "corner",
		},
		{
			size: "small",
			title: "circle",
		},
		{
			size: "big",
			type:"color",
			title: "background",
		},
		{
			size: "big",	
			title: "backgroundImg",
		},
		{
			size: "medium",
			title: "border",
		},
		{
			size: "medium",
			title: "shadow",
		}

	]
}


 
const NAVBARHEIGHT = "40px"

const getStyle = (style, type,id) =>{

	if(!style[type][id])
	return style["default"][id]

return style[type][id]

}

export const PropsEditor = (props)=>{

	const [editor, setEditor] = useState(false)


	const {data, slots ,setPropsValue} = useContext(ClayContext);
	
	const update = (key, value)=>{

		setPropsValue(props.config.type,slots[props.config.type], props.id, key, value);

	}

	const componentStyle = getStyle(data[props.config.type], slots[props.config.type], props.id)

	return (
		<React.Fragment>
			<Container
				onClick={()=>{if(editor)setEditor(false)}}
				shadow="0 0.5px 5px rgba(0,0,0,0.4)"
				overflowHidden
				defaultCorner
				background="#212121"
				position="fixed" 
				distance="0 0 0 0rem"
				width="350px"
				
				css={`
					opacity:0.3;

					&:hover{
						opacity:1;
					}
				color: white;
				transition: 0.8s;
				${editor && " bottom:-300px;  "}
				border-radius:6px;
				z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
				`}>

			<Navbar 
				defaultShadow 
				background="#212121">
				<AlignStart>
					<Item width="auto" margin="0 1rem">
						{props.id} 
					</Item>
				</AlignStart>
				<AlignEnd>
				<Item 
				onClick={()=>{setEditor(true)}}
				center
				width="40px">
				<b><BaselineMinimize/></b>

				</Item>
				<Item 
				onClick={props.close}
				center
				width="40px">
				<b><BaselineClose/></b>
				</Item>
				</AlignEnd>
			</Navbar>			

			<Container
				width="110%"
				background="#212121"
				overflowYScroll
				height="90%"
				css={`
					margin-top:40px; 
					padding:1rem; 
					padding-right:10%;
					font-size: 12px;
				`}>

				<CopyToClipboard 
					onCopy={()=>{

						alert("Copied!")
					}}
					text={JSON.stringify(componentStyle, null, 4)}>
				<button>Copy json</button>
				</CopyToClipboard>

				<Typography 
					fontSize="16px" 
					width="90%"
					marginB="20"
					color="gray"
					css="width:90%; margin: 20px auto;"
				>Slot: {slots["style"]} <BaselineArrowDropDown/> <br/> <br/>Component: Container
				</Typography>

				<Typography 
					fontSize="18px" 
					width="90%"
					marginB="20"
					css="width:90%; margin: 20px auto;"
				>CSS code</Typography>

			<EditorItems 
				componentStyle={componentStyle} 
				items={configJSON.textarea} 
			update={update} />

				

			<Typography 
					fontSize="18px" 
					width="90%"
					marginB="20"
					css="width:90%; margin: 20px auto;">
			Shortcuts
			</Typography>

			<Container 
				row 
				width="90%" 
				marginCenter>

			{configJSON.toggles.map((item, key)=>{
			return <ShortcutItem  
				key={"toggles" + key}
				active={componentStyle[item.title]} 
				icon={item.icon} 
				onClick={()=>{update(item.title, !componentStyle[item.title])}}

				/> })}
				
			
			</Container>

			<Typography 
				fontSize="18px" 
				width="90%"
				marginB="20"
				css="width:90%; margin: 20px auto;">Inputs
			</Typography>

			<Container 
				width="90%" 
				center 
				row  
				margin="3rem auto">

			{configJSON.inputs.map((item, key)=>{
			return <ListItem 
				 key={"inputs" + key}
				 {...item}
				  update={update} 
				  value={componentStyle[item.title]} 
			 
				/>

			})}
				
				
						
			</Container>
	
			</Container>

		</Container>

		</React.Fragment>


		)
}

export default PropsEditor;