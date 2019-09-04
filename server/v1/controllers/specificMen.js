import {mentorObj} from '../models/mentor';

const findMenId = (req, res, next) => {
  const{
    mentorId,
  } = req.params;
  
  let menId = mentorObj.findIndex(m => m.mentorId === mentorId);
  
  if(menId){
    return res.send({
      mentorObj,
    })
  }
  next();
}

export default findMenId;