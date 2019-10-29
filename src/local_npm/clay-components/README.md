# Dohnny Master Component

This is a featutr to make pixel pectect apps, uses dohnny components directlly from the cloud and work in copywitting easily.


### Dohnny Master Component
- style
- text

### Dohnny Components.
- structure
- component
- state 


```

npm install -s react-master-component;

```


```

import EditorProvider from "dohnny-meta-editor";

<EditorProvider

	style = {{ 

		}}


	dict = {{"custom":{

		"a.b.c":{
			value:"ddddd",
			style:{{}}
		}
		}}}

	devMode={true}

	textType = "default"
	styleType =  "spanish"

	connect={{
		dohnnyToken="rj45pREWNSCE34Jda3JD",
		appname= ""
		}}
/>

```

```

import EditorProvider, { 
		Typography, 
		Container, 
		EditorConsumer, 
		json_styles, 
		json_dict } from "dohnny-meta-editor";

```


masterComponent.active();


### Typography
When devMode is active on context click will change typography per input.
You can access ethe dictorraig importing the custom_text 


### Container


## DevMenu
if active or in env is in development shows a sidebar that containts all the of 
styles and  dicts of the project.



types = ["default" ,"custom", "english", "spanish"]

changeText("custom")

<Container
	forceType="custom"
/>
 
changeText("custom")