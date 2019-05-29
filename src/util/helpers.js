/**
 * Evaulate the client's inner width and return a breakpoint name
 */
const largeBreakpoint = 1025,
	mediumBreakpoint = 768,
	viewportWidth = window.innerWidth;

export const getBreakpoint = () => {
	if(viewportWidth > largeBreakpoint) return 'Large';
	if(viewportWidth < largeBreakpoint && viewportWidth > mediumBreakpoint) return 'Medium';
	return 'Small';
};

export const isMobile = () => {
	return viewportWidth < largeBreakpoint;
};


// Custom PropType to accept number strings and numbers for a number field
export const numberLikeProp = (props, propName, componentName) => {
	if(props[propName] && Number.isNaN(Number(props[propName]))) {
		return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Must be a number or number string.`);
	}
};
