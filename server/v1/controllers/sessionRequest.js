import {sessionObj, session} from '../models/reqSession';
import {userObj} from '../models/user';

const findInfo = (req, res) => {

  const {
    mentorId,
    questions
  } = req.body;

  const user = userObj.find(u => u.email === req.decoded.email);

  if(user ){
    const sess = new session (sessionObj.length, mentorId, user.userId, questions, user.email,'created');
    sessionObj.push(sess);

    res.status(200).send({
      sess,
    });
    
  }else{
    res.status(404).send({
      message: 'mentor does not exist',
    })
  }
}

export default findInfo;