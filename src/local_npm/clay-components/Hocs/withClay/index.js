import React, {useState, useEffect} from "react";
import usePropsManager from "../../Hooks/usePropsManager";
import PropsEditor from "./PropsEditor"








/*

{

CustomComponent:(props)=>{

	
	
	
	
	<Typography updateValue>
	{props.data.children}
	</Typography>
	
}
}

*/


const withClay = (config = {
	type:"container",
	schema: []

})=>{

	return (Component)=>{

		const NewClayComponent = (props)=>{

			const {
			newProps,
			edit,
			setEdit,
			manager
			} = usePropsManager(props, config)


			/*
			if(CustomComponent)
			return <CustomComponent customComponent data={newProps} updateValue={} />


			*/

			if(!manager)
				return <Component  
					{...props} />

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


export default withClay
