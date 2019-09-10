import {sessionObj, session} from '../models/reqSession';
import {userObj} from '../models/user';
import responseFormatter from '../helpers/responseFormatter';

const findInfo = (req, res) => {

  const {
    mentorId,
    questions
  } = req.body;

  const user = userObj.find(u => u.email === req.decoded.email);

  if(user ){
    const sess = new session (sessionObj.length, mentorId, user.userId, questions, user.email,'created');
    sessionObj.push(sess);
    return responseFormatter(res,200,'mentorship created',sess,false);
  }else{
    return responseFormatter(res,409,'mentorship not created',data,true);
  }
}

export default findInfo;