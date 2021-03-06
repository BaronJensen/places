import styled from 'styled-components';
import media from './media';

const H1 = styled.h1`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	color: ${props => props.color};

	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

${props => props.css && `${props.css}`}
${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}

${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	


`;

const H2 = styled.h2`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	color: ${props => props.color};
	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};
	${props => props.css && `${props.css}`}
	${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;

const H3 = styled.h3`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;
	color: ${props => props.color};

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
      margin-left: ${props.marginL}px;
    `};

	${props =>
		props.marginR &&
		`
      margin-right: ${props.marginR}px;
    `};

	${props =>
		props.marginB &&
		`
      margin-bottom: ${props.marginB}px;
    `};

	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

		${props => props.css && `${props.css}`}
		${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;

const H4 = styled.h4`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	color: ${props => props.color};
	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

		${props => props.css && `${props.css}`}
		${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;

const H5 = styled.h5`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize}px;
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	color: ${props => props.color};
	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

		${props => props.css && `${props.css}`}
		${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;

const H6 = styled.h6`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	color: ${props => props.color};
	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

		${props => props.css && `${props.css}`}
		${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;

const P = styled.p`
	font-family: inherit;
	color: ${props => props.color};
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

		${props => props.css && `${props.css}`}
		${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;

const PRE = styled.pre`
	font-family: inherit;
	color: ${props => props.color};
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

	${props => props.css && `${props.css}`}
	${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}
${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	

`;



const DIV = styled.div`
	font-size: ${props => props.fontSize};
	font-family: inherit;
	margin: 0;

	${props => {
		switch (props.align) {
			case 'right':
				return `text-align: right;`;
			case 'left':
				return `text-align: left;`;
			case 'center':
				return `text-align: center`;
			default:
				return `text-align: left;`;
		}
	}};

	${props =>
		props.fontSize &&
		`
    font-size: ${props.fontSize};
    `};

	${props =>
		props.marginT &&
		`
    margin-top: ${props.marginT}px;
  `};

	${props =>
		props.marginL &&
		`
    margin-left: ${props.marginL}px;
  `};

	${props =>
		props.marginR &&
		`
    margin-right: ${props.marginR}px;
  `};

	${props =>
		props.marginB &&
		`
    margin-bottom: ${props.marginB}px;
  `};

	color: ${props => props.color};

	${props => props.underline && `text-decoration: underline`};
	${props => props.weight && `font-weight: ${props.weight}`};
	${props => props.fontStyle && `font-style: ${props.fontStyle}`};

${props => props.css && `${props.css}`}
${props => props.desktopCSS && media().desktop`${props.desktopCSS}`}
${props => props.tabletCSS && media().tablet`${props.tabletCSS}`}
${props => props.phoneCSS && media().phone`${props.phoneCSS}`}
${props => props.mediaCSS && media(props.mediaCSS[0]).desktop`${props.mediaCSS[1]}`}

${props => props.clampin &&` 
	position: relative;
	${props.clampin.height &&`height:${props.clampin.height};
	`}
	overflow: hidden;
	&:after {
	  text-align: right;
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 70%;
	${props.clampin.type === "fade" ?`
		content: "";
		height:${props.clampin.lineSize}; 
		background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
		`:
		 props.clampin.type === "dots"?`
	 	content: "...";`:`content: "${props.clampin.type}";`
	}
	}`
}

${props => props.lineClamp && `
			display: -webkit-box;
			-webkit-line-clamp: ${props.lineClamp.size};
			-webkit-box-orient: vertical;
			${props.lineClamp.height &&`height:${props.lineClamp.height};`}
			overflow: hidden;
   		`}

${props => props.truncate && `   
	white-space: nowrap; 
	width: ${props.truncate}; 
	overflow: hidden;
	text-overflow: ellipsis; 
`}
	


`;

export { H1, H2, H3, H4, H5, H6, P, PRE, DIV };

