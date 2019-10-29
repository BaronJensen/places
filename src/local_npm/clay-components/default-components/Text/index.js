import Typography from 'local_npm/react-styled-typography';
import withClay from "../../Hocs/withClay";
import schema from "./schema"



export const Text = withClay({type:"typography",schema})(Typography);
export default Text;




