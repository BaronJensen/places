import {Container as ContainerBase} from "local_npm/react-container"
import withClay from "../../Hocs/withClay";
import schema from "./schema"

export const Container = withClay({type:"container",schema})(ContainerBase);

export default Container;




