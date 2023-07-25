export default function getFullResponseFromAPI(success) {
	return new Promise((resolve, PromiseRejectionEvent) => {
		if (success === true) {
			const response = {
				status: 200,
				body: 'Success'
			}
			resolve(response);
		} else {
			const error = new Error("The fake API is not working currently");
			reject(error);
		}
	});
}
