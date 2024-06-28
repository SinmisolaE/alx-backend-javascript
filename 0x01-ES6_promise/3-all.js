import {uploadPhoto, createUser} from './utils';

export default function handleProfileSignup() {
  const b = uploadPhoto();
  const u = createUser();

  return Promise.all([b, u]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[2].lastName}`);
  })
  .catch(() => { console.log('Signup system offline'); });
}
