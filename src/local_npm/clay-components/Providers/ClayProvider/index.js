import React, {useState, useEffect} from "react";
import ManagerMenu from "./ManagerMenu";

export const ClayContext  = React.createContext();


const ClayProvider = ({children, databaseId, manager})=>{
	const [slots, _setSlot] = useState({
		"container": "custom",

		"typography": "default"
	});

	const [_props, _setProps] = useState({

		"container":{
			default:{none:""},
			custom:{none:""}
		},

		"typography":{
			default:{none:""},
			custom:{none:""}
			
		}


	});




	const setSlot = (type, value)=>{

		const copy = {...slots};

		copy[type] = value

		_setSlot(copy)
	}




	const setProps = (type,slot, id, props)=>{

		const copy = {..._props};

		if(!copy[type])
			copy[type] = {}


		if(!copy[type][slot])
			copy[type][slot] = {}

		if(!copy[type][slot][id])
			copy[type][slot][id] = {}

		copy[type][slot][id] = props
		
		_setProps(copy)
	

	}



	const setPropsValue = (type,slot, id, propName, value)=>{

		const copy = {..._props};

		if(!copy[type])
			copy[type] = {}

		if(!copy[type][slot])
			copy[type][slot] = {}

		if(!copy[type][slot][id])
			copy[type][slot][id] = {}

		copy[type][slot][id][propName] = value

		if(slot === "default")
			alert("Your are editing the default slot")
		
		_setProps(copy)

		
		

	}



	return (
		<React.Fragment>

			<ClayContext.Provider 
				value={{
					slots,
					setSlot,
					manager,
					data:_props, 
					setProps,
					setPropsValue,
				}}>

				{children}
				{manager && <ManagerMenu />}
			</ClayContext.Provider>
		</React.Fragment>
		)
}


export default ClayProvider;