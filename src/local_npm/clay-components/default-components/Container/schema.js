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

const propsSchema = [{
	
		title:"Shortcuts",

		layout:"regular",

		value:"open",

		content:[
			{
				title:"defaultCorner",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineRoundedCorner,
				}
			},
			{
				title:"defaultBorder",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon: BaselineBorderStyle,
				}
			},
			{
				title:"defaultShadow",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineLayers,
				}
			},
			{
				title:"center",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineCenterFocusStrong,
				}
			},
			{
				title:"row",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineKeyboardTab,
				}
			},
			{
				title:"fullscreen",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineFullscreen,
				}
			},
			{
				title:"marginCenter",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineFormatAlignCenter,
				}
			},
			{
				title:"overflowHidden",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineBorderClear,
				}
			},
			{
				title:"overflowXScroll",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineBorderRight,
				}
			},
			{
				title:"overflowYScroll",
				value: false,
				layout: "shortcut",
				layoutProps:{
					icon:BaselineBorderBottom,
				}
			},
		],
	},


	{

		title:"CSS",

		layout:"regular",

		value:"false",

		content:[
			{
				title:"css",
				value: ``,
				layout: "text",
			},
			
		],
	},




	{

		title:"Desktop CSS",

		layout:"regular",

		value:false,

		content:[
			{
				title:"desktopCSS",
				value: ``,
				layout: "text",
			},
			
		],
	},

	{

		title:"Tablet CSS",

		layout:"regular",

		value:false,

		content:[
			{
				title:"tabletCSS",
				value: ``,
				layout: "text",
			},
			
		],
	},


{

		title:"Phone CSS",

		layout:"regular",

		value:false,

		content:[
			{
				title:"phoneCSS",
				value: ``,
				layout: "text",
			},
			
		],
	},



	{

		title:"Styles",

		layout:"regular",

		value:false,

		content:[
			{
				title:"width",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"layoutProps",

				}
			},
				{
				title:"height",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"small",

				}
			},
				{
				title:"margin",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"small",

				}
			},
				{
				title:"position",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"small",

				}
			},
				{
				title:"distance",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"medium",

				}
			},
				{
				title:"background",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"medium",

				}
			},
				{
				title:"color",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"small",

				}
			},
				{
				title:"circle",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"small",

				}
			},
				{
				title:"backgroundImg",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"small",

				}
			},
				{
				title:"",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"big",

				}
			},
				{
				title:"corner",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"big",

				}
			},
				{
				title:"border",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"medium",

				}
			},
			{
				title:"shadow",
				value: ``,
				layout: "input",
				layoutProps:{
					type:"text",
					size:"medium",

				}
			},
		],
	}
]

export default propsSchema;
/*
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

const config = {
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

export default config;















*/