import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const uploadResponse = uploadPhoto(fileName);
  const signUpResponse = signUpUser(firstName, lastName);

  return Promise.all([uploadResponse, signUpResponse])
    .then((responses) => {
      console.log(responses[0].firstName);
    })
    .catch((err) => console.error(err));
}
