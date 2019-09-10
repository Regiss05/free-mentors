import {userObj} from '../models/user';
import {mentorObj, mentor} from '../models/mentor';
import responseFormatter from '../helpers/responseFormatter';

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

    return responseFormatter(res,200,'user account change to mentor',ment,false);
    
  } else {
    return responseFormatter(res,409,'account not changed',true);
  }
}

export default findUserId;