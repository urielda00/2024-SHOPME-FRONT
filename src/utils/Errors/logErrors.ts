const displayError = (error: Error | unknown, functionName: string): void => {
	const errorMessagePrefix = `Error in ${functionName} function: `;

	if (error instanceof Error) {
		console.error(errorMessagePrefix + error.message);
	} else {
		console.error(errorMessagePrefix + 'Unknown Error');
	}
};

export default displayError;
