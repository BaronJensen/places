import {elevation} from './Material/Elevations'
import media  from './Media';
import component  from './Material/Components';
import utils  from './Utils';

const theme = {

  primary: '#212121',
  secondary: '#3367D6',
  background: '#dfdfdf',
  contrast: 'white',
  auxiliar: '#414141',
  primaryText: "white",
  secondaryText:"#6D6D6D",

  colors:{
    "green":"blue",  
    "blackNotebook":"#171717",
    "blackSeparator":"#1E1E1E",  
    "blue":"#0059FA",
    "primary":"#0059FA",
    "grey": "#EEEEEE",
    "greyText": "#676C72",
    "background":"#EEEEEE",
    "greyBackground":"#EEEEEE",
    "white": "#fafafa",
    "navbar":"#fafafa",
    "navbarText":"#676C72",
    "navbarSeparator": "#E8EAED",
  },

  color:{
    "blackCode":"#1D1D1D",  
    "blackNotebook":"#171717",
    "blackSeparator":"#1E1E1E",  
    "blue":"#0059FA",
    "primary":"#0059FA",
    "grey": "#EEEEEE",
    "greyText": "#676C72",
    "background":"#EEEEEE",
    "greyBackground":"#EEEEEE",
    "white": "#fafafa",
    "navbar":"#fafafa",
    "navbarText":"#676C72",
    "navbarSeparator": "#E8EAED",
  },

  //Functions:
  elevation,
  media,
  component,
  utils: utils,
  fontWeight:"regular",
  //Vars and const
  const: {
    "navbarHeight":48.48, //px size
    "container": 70, // %
  }
};


export default theme;