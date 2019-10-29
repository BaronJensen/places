export const getComponentsValues =  (props, config)=>{

	var schema = []

	var obj = {}

	for (var i = config.schema.length - 1; i >= 0; i--) {
		schema = [...schema, ...config.schema[i].content]	
	}


	for (var i = schema.length - 1; i >= 0; i--) {
		if(schema[i].title && props[schema[i].title])
			obj[schema[i].title] = props[schema[i].title]
	}

	return obj
}

export default getComponentsValues;