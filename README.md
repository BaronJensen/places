# Places
This app is an implementation of the google maps api in React.

[DEMO](https://places-100l.herokuapp.com/)

Note: The tests are imcomplete, so they are failing but app works...


## Setup
To run this app remember to add your MAPS api keyin your .env:

REACT_APP_GOOGLE_MAP_API_KEY=[YOUR-API-KEY]

## Components Architecture

Imports(<-)
Use (<=)

---

- Places (Context Providers)
- Search (Molecules) <= [Places.usePlacesContext]
- History (Molecules) <= [Places.usePlacesContext] 
	- Item(Molecule) <= [Places.usePlacesContext]
	- OptionsItem(Molecule) <= [Places.usePlacesContext]
- Sidebar (Molecules) <- [History, Search] & <= [Places.usePlacesContext]
- Mapbox (Molecules) <= [Places.usePlacesContext]
- Home (Views) <- [MapBox, Sidebar]
- Error (Views) 


## Styles

For the styles im using a personal library called react-container, that helps me to add inline styles to my react components, to have granular control over my apps.

```javascript

<Container 
	css
	tabletCSS
	width
	defaltShadow
	row 
	center
	background
/>

<Text 
	color
	fontSize
/>


 ``` 



### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
