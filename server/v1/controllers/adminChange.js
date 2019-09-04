import {userObj} from '../models/user';

const findUserId = (req, res) => {
  const {
    userId,
  } = req.params;

  const userIndex = userObj.findIndex(u => u.userId.toString() === userId);
  if(userIndex >= 0){
    userObj[userIndex].isAdmin = true;
    res.status(200).send(
      userObj
    );
  } else {
    res.status(404).send({
      Message: 'user doenst exist',
    });
  }
}

export default findUserId;