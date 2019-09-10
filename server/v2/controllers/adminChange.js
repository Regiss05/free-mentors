import {userObj} from '../models/user';
import {mentorObj, mentor} from '../models/mentor';

const findUserId = (req, res) => {
  const {
    userId,
  } = req.params;

  const userIndex = userObj.findIndex(u => u.userId.toString() === userId);
  if(userIndex >= 0){
    userObj[userIndex].isMentor = true;
    const myuser = userObj[userIndex];
    const ment = new mentor(mentorObj.length,myuser.firstName,myuser.lastName,myuser.email,myuser.address,myuser.bio,myuser.occupation,myuser.expertise,myuser.userId);
    mentorObj.push(ment);
    res.status(200).send(
      ment
    );
  } else {
    res.status(404).send({
      Message: 'user doenst exist',
    });
  }
}

export default findUserId;