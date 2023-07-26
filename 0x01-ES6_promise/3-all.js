/* eslint-disable import/extensions */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const create = createUser();
  return Promise.all([upload, create])
    .then((result) => {
      console.log(`${result[0].body} ${result[1].firstName} ${result[2].lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
