import React, {useState, useContext, useEffect} from "react"
import { ClayContext} from "../Providers/ClayProvider";
import getComponentsValues from "../General/getComponentsValues"


export const usePropsManager = (props, config)=> {

	const { 
		manager = false,
		slots = {}, 
		data = {}, 
		setProps = ()=>null, 
		setPropsValue = ()=>null,
		_connected=true
	} = useContext(ClayContext) || {_connected:false}

	if(!_connected)
		console.error(`useContext from Clay Components is outside of the provider, <<${props.id}>> can not be register in the props manager.`)


	const [edit, setEdit] = useState(false)

	useEffect(()=>{
		if(props.id && _connected)
			{
				const _props = getComponentsValues(props, config);
				setProps(config.type,"default",props.id, _props);
				//setProps(defaultSlot,"custom",props.id, data);
			}
	},[]);



/*
	if(props.id && _connected)
		console.log(props,props.css)*/
	const currentSlot = _connected? props.slot? props.slot : slots[config.type] : "default";

	const currentDtata = data[config.type][currentSlot][props.id]?data[config.type][currentSlot][props.id]:data[config.type]["default"][props.id]
	
	
	const newProps = (props.id && _connected)? {...props,  ...data[config.type]["default"][props.id], ...currentDtata, 
		


		onDoubleClick:(e)=>{
			e.stopPropagation();
			setEdit(true);
		},
		css: currentDtata?`
		${currentDtata.css}
		&:hover{border: 2px solid black;}` : `&:hover{border: 2px solid black;}`,
	} : props;


	//console.log(props.id,":",slots[config.type],currentDtata, newProps)

	return {
	slots,
	currentSlot,
	newProps, 
	setProps,
	setPropsValue,
	edit,
	setEdit,
	manager
	}
};


export default usePropsManager