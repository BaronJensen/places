export const center = ` 
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align:center;
			align-items: center;`;

export const fullscreen =` 
		position: fixed;
		top:0rem;
		left:0rem;
		right:0rem;
		bottom:0rem;
		width:100%;
		height:100vh;
		background: rgba(33,33,33,0.8);	
		`;


export const row = ` 
  		display: flex;
  	    justify-content: space-between;
  	    flex-direction: row;
  	    align-content: flex-end;
  	    flex-flow: row wrap;
  	    `;



/*
	add = [ROW_ALING_LEFT, ROW_ALING_RIGHT, ]



const HELPERS = {
	ROWALIGN:()=>{
		return `  
			display: inline-flex;
			align-items: flex-start;
			justify-content: center;
			min-width: 0;
			height: 100%;
			flex: 1;
			z-index: 1;
		`
	}
}
*/

/*  	

.container {
  display: flex;
}


.container {
  flex-direction: row | row-reverse | column | column-reverse;
}


.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}


flex-flow: <‘flex-direction’> || <‘flex-wrap’>

.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}


.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}


.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}


*/