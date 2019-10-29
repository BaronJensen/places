import PropsEditor from "./PropsEditor"
import Typography  from "local_npm/react-styled-typography"
import {Container as ContainerBase, Img} from "local_npm/react-container"


const withClay = (config = {
	type:"container",

})=>{

	return (Component)=>{

		const NewClayComponent = (props)=>{

			const {
			newProps,
			edit,
			setEdit
			} = usePropsManager(props, config.type)

			return (
			<React.Fragment>
				<Component  
					{...newProps} />

				{edit &&

					<PropsEditor
						config = {config}
						id = {newProps.id} 
						close = {()=>{setEdit(false)}}/>
				}
			</React.Fragment>
			)
		}

		return NewClayComponent
	}

}



//Clay components

const Container = withClay({type:"container"})(ContainerBase);
const Text = withClay({type:"text"})(ContainerBase);
const Img = withClay({type:"text"})(ContainerBase);
const Input = withClay({type:"text"})(ContainerBase);

//CUSTOMS
const Custom = withClay({type:"selector"})(ContainerBase);

const CustomAdvanced = (props)=>{

			const {
			newProps,
			edit,
			setEdit,
			} = usePropsManager(props, config)

			return (
			<React.Fragment>
				<Component  
					{...newProps} />

				{edit &&

					<PropsEditor
						config = {config}
						id = {newProps.id} 
						close = {()=>{setEdit(false)}}/>
				}
			</React.Fragment>
			)
		}



export {Container}






export const Text = (props)=>{

	const [edit, setEdit] = useState(false)
	const [text, setText] = useState(props.children)

	if(edit)
		return (
			<Typography {...props}>
				<textarea style={{border:"none",borderBottom:"1px", width:"100%",height:"auto", background:"rgba(0,0,0,0)"}} 
				value={text} 
				onChange={(e)=>{setText(e.target.value)}}/>
				<br/>
				<button  style={{background:"gray", fontSize:"18px"}} onClick={()=>{setEdit(false)}}>Done</button>
				<button  style={{background:"gray", fontSize:"18px"}} onClick={()=>{setEdit(false)}}>Change</button>
				<button  style={{background:"gray", fontSize:"18px"}} onClick={()=>{setEdit(false)}}>Create new</button>
				<button  style={{background:"gray", fontSize:"18px"}} onClick={()=>{setEdit(false)}}>Styles</button>
			</Typography>)

			return(<Typography 
				{...props} 
				css={props.css + "&:hover{border: 2px dashed black;}"} 
				onDoubleClick={(e)=>{
					e.stopPropagation();
						setEdit(true);
				}}>{text}
				</Typography>)
}

//registerComponent()

/*Custom connection*/

/*
slots,
currentSlot,
newProps,
setProps,
setPropsValue,
edit,
setEdit

usePropsManager(props, config.type)
<PropsEditor config = {config} id = {newProps.id} close = {()=>{setEdit(false)}}/>



*/



/*
	export const Container = (props)=>{
		return !props.id?<ContainerBase {...props} />:<ContainerManageable {...props}/>
	}
*/