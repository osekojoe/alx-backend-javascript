/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
	Promise.all([uploadPhoto(), createUser()])
		.then((results) => {
			const [photoResponse, userResponse] = results
			console.log(`photo: ${photoResponse.body},
						firstName: ${userResponse.firstName},
						lastName: ${userResponse.lastName}`
			)
		})
		.catch((error) => {
      		console.error("Signup system offline");
    	});
}