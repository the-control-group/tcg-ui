import { createContext } from 'react';

export default createContext({
	enqueueModal: () => {},
	dequeueModal: () => {},
	currentModal: '',
	modalRoot: document.body
});
