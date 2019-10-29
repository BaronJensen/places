import ClayProvider, {ClayContext} from "./Providers/ClayProvider";
import usePropsManager from "./Hooks/usePropsManager";
import withClay from "./Hocs/withClay";


import {Container} from "./default-components/Container";
import Text from "./default-components/Text";


//const ClayedComponent = createComponent(a.div)


//import Img from "./DefaultComponnets/Img"
//import input from "./DefaultComponnets/input"


export default ClayProvider;
export {ClayProvider,ClayContext,  withClay, usePropsManager, Container, Text}
