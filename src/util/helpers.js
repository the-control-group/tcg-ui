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
